/* eslint-disable */
import Vuex from 'vuex'
import axios from 'axios'

const CLIENT_ID = '2w88chpjfzvxhtm2nsjf9oz2i6iz99'
const API_URL = 'https://api.twitch.tv/kraken'
const CHANNEL_NAME = 'jimothyz'
const ENDPOINT_STREAM = 'streams'
const ENDPOINT_CHANNEL = 'channels'

const createStore = () => {
  return new Vuex.Store({
    state: {
      channel: {
        online: false,
        status: '',
        game: '',
        views: 0,
        viewers: 0,
        followers: 0,
        partner: false
      }
    },
    mutations: {
      SET_STREAM_DATA (state, data) {
        state.channel = data
      }
    },
    actions: {
      async nuxtServerInit ({commit}, {req}) {
        const streamResponse = await axios.get(`${API_URL}/${ENDPOINT_STREAM}/${CHANNEL_NAME}?client_id=${CLIENT_ID}`)

        if (streamResponse.data.stream) {
          const { viewers } = streamResponse.data.stream
          const { status, game, partner, views, followers } = streamResponse.data.stream.channel

          commit('SET_STREAM_DATA', {
            online: true,
            viewers,
            status,
            game,
            partner,
            views,
            followers
          })
        } else {
          const channelsResponse = await axios.get(`${API_URL}/${ENDPOINT_CHANNEL}/${CHANNEL_NAME}?client_id=${CLIENT_ID}`)
          const { status, game, partner, views, followers } = channelsResponse.data

          commit('SET_STREAM_DATA', {
            online: false,
            viewers: 0,
            status,
            game,
            partner,
            views,
            followers
          })
        }
      }
    }
  })
}

export default createStore
