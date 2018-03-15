/* eslint-disable */
import Vuex from 'vuex'
import axios from 'axios'

const CLIENT_ID = process.env.TWITCH_CLIENT_ID
const API_URL = 'https://api.twitch.tv/kraken'
const CHANNEL_NAME = 'jimothyz'
const ENDPOINT_STREAM = 'streams'
const ENDPOINT_CHANNEL = 'channels'
const ENDPOINT_GAMES = 'search/games'

const createStore = () => {
  return new Vuex.Store({
    state: {
      channel : {}
    },
    mutations: {
      SET_CHANNEL_DATA (state, data) {
        state.channel = data
      }
    },
    actions: {
      async nuxtServerInit ({commit}, {req}) {
        let payload = {}

        const streamResponse = await axios.get(
          `${API_URL}/${ENDPOINT_STREAM}/${CHANNEL_NAME}?client_id=${CLIENT_ID}`
        )
        .then(response => { 
          return response.data
        })
        .catch(error => {
            console.log(error.response)
        })

        if (streamResponse && streamResponse.stream) {
          const channelData = streamResponse.stream.channel
          payload = {
            online: true,
            viewers: streamResponse.stream.viewers,
            game: channelData.game,
            status: channelData.status,
            partner: channelData.partner,
            views: channelData.views,
            followers: channelData.followers,
            url: channelData.url,
            noConnection: false
          }
        } else {
          const channelResponse = await axios.get(
            `${API_URL}/${ENDPOINT_CHANNEL}/${CHANNEL_NAME}?client_id=${CLIENT_ID}`
          )
          .then(response => { 
            return response.data
          })
          .catch(error => {
              console.log(error.response)
          })

          if (channelResponse) {
            payload = {
              status: channelResponse.status,
              game: channelResponse.game,
              partner: channelResponse.partner,
              views: channelResponse.views,
              followers: channelResponse.followers,
              url: channelResponse.url,
              noConnection: false
            }
          } else {
            payload = {
              boxArt: '/images/default-boxart.jpg',
              noConnection: true,
              url: `https://www.twitch.tv/${CHANNEL_NAME}`
            }
          }
        }

        if (payload.game) {
          const gameResponse = await axios.get(`${API_URL}/${ENDPOINT_GAMES}?query=${encodeURIComponent(payload.game)}&type=suggest&client_id=${CLIENT_ID}`)
          if (gameResponse.data.games && gameResponse.data.games[0].box && gameResponse.data.games[0].box.large) {
            payload.boxArt = gameResponse.data.games[0].box.large
          }
        }

        commit('SET_CHANNEL_DATA', { ...payload })
      }
    }
  })
}

export default createStore
