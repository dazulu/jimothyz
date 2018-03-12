/* eslint-disable */
import Vuex from 'vuex'
import axios from 'axios'

const CLIENT_ID = '2w88chpjfzvxhtm2nsjf9oz2i6iz99'
const API_URL = 'https://api.twitch.tv/kraken'
const CHANNEL_NAME = 'jimothyz'
const ENDPOINT_STREAM = 'streams'
const ENDPOINT_CHANNEL = 'channels'
const ENDPOINT_GAMES = 'search/games'

const createStore = () => {
  return new Vuex.Store({
    state: {
      channel: {
        online: false,
        status: '',
        game: '',
        boxArt: '~/images/default-boxart.jpg',
        views: 0,
        viewers: 0,
        followers: 0,
        partner: false,
        url: `https://www.twitch.tv/${CHANNEL_NAME}`
      }
    },
    mutations: {
      SET_CHANNEL_DATA (state, data) {
        state.channel = data
      }
    },
    actions: {
      async nuxtServerInit ({commit}, {req}) {

        let payload = {}

        const streamResponse = await axios.get(`${API_URL}/${ENDPOINT_STREAM}/${CHANNEL_NAME}?client_id=${CLIENT_ID}`)
        
        if (streamResponse.data.stream) {
          const streamData = streamResponse.data.stream
          const channelData = streamResponse.data.stream.channel
          payload = {
            online: true,
            viewers: streamData.viewers,
            game: streamData.game,
            status: channelData.status,
            partner: channelData.partner,
            views: channelData.views,
            followers: channelData.followers,
            url: channelData.url
          }
        } else {
          const channelResponse = await axios.get(`${API_URL}/${ENDPOINT_CHANNEL}/${CHANNEL_NAME}?client_id=${CLIENT_ID}`)
          payload = {
            status: channelResponse.data.status,
            game: channelResponse.data.game,
            partner: channelResponse.data.partner,
            views: channelResponse.data.views,
            followers: channelResponse.data.followers,
            url: channelResponse.data.url
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
