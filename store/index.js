import Vuex from 'vuex'
import axios from 'axios'

const CLIENT_ID = '2w88chpjfzvxhtm2nsjf9oz2i6iz99'
const API_URL = 'https://api.twitch.tv/kraken'
const CHANNEL_NAME = 'jimothyz'
const ENDPOINT_STREAMS = 'streams'

const createStore = () => {
  return new Vuex.Store({
    state: {
      streamStatus: null
    },
    mutations: {
      SET_STEAMSTATUS (state, data) {
        state.streamStatus = data
      }
    },
    actions: {
      async nuxtServerInit ({commit}, {req}) {
        let { data } = await axios.get(`${API_URL}/${ENDPOINT_STREAMS}/${CHANNEL_NAME}?client_id=${CLIENT_ID}`)
        commit('SET_STEAMSTATUS', data.stream)
      }
    }
  })
}

export default createStore
