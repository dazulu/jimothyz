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
      streamStatus: null,
      channelData: {
        status: '',
        game: '',
        partner: false,
        views: 0,
        followers: 0
      }
    },
    mutations: {
      SET_STEAM_STATUS (state, data) {
        state.streamStatus = data
      },

      SET_CHANNEL_DATA (state, data) {
        state.channelData = data
      }
    },
    actions: {
      async nuxtServerInit ({commit}, {req}) {
        const streamsResponse = await axios.get(`${API_URL}/${ENDPOINT_STREAM}/${CHANNEL_NAME}?client_id=${CLIENT_ID}`)
        commit('SET_STEAM_STATUS', streamsResponse.data.stream)

        const channelsResponse = await axios.get(`${API_URL}/${ENDPOINT_CHANNEL}/${CHANNEL_NAME}?client_id=${CLIENT_ID}`)
        const { status, game, partner, views, followers } = channelsResponse.data
        commit('SET_CHANNEL_DATA', { status, game, partner, views, followers })
      }
    }
  })
}

export default createStore
