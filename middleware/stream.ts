import { Stream } from '@/store'
import { Middleware } from '@nuxt/types'
import axios from 'axios'

const middleware: Middleware = async ({
  store,
  $config: { CHANNEL_ID, CHANNEL_NAME, CLIENT_ID },
}) => {
  const API_URL = 'https://api.twitch.tv/kraken'
  const TWITCH_API_VERSION = '5'
  const ENDPOINT_STREAM = 'streams'
  const ENDPOINT_CHANNEL = 'channels'
  const ENDPOINT_GAMES = 'search/games'

  let data: Stream = {
    online: false,
    followers: 0,
    viewers: 0,
    views: 0,
    partner: '',
    status: '',
    game: '',
    boxArt: '/images/default-boxart.jpg',
    url: `https://www.twitch.tv/${CHANNEL_NAME}`,
    noConnection: true,
  }

  const streamResponse = await axios
    .get(
      `${API_URL}/${ENDPOINT_STREAM}/${CHANNEL_ID}?client_id=${CLIENT_ID}&api_version=${TWITCH_API_VERSION}`
    )
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error.response)
    })

  if (streamResponse && streamResponse.stream) {
    const channelData = streamResponse.stream.channel
    data = {
      online: true,
      viewers: streamResponse.stream.viewers,
      game: channelData.game,
      status: channelData.status,
      partner: channelData.partner,
      views: channelData.views,
      followers: channelData.followers,
      url: channelData.url,
      noConnection: false,
    }
  } else {
    const channelResponse = await axios
      .get(
        `${API_URL}/${ENDPOINT_CHANNEL}/${CHANNEL_ID}?client_id=${CLIENT_ID}&api_version=${TWITCH_API_VERSION}`
      )
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error.response)
      })

    if (channelResponse) {
      data = {
        status: channelResponse.status,
        game: channelResponse.game,
        partner: channelResponse.partner,
        views: channelResponse.views,
        followers: channelResponse.followers,
        url: channelResponse.url,
        noConnection: false,
      }
    }
  }

  if (data.game) {
    const gameResponse = await axios.get(
      `${API_URL}/${ENDPOINT_GAMES}?query=${encodeURIComponent(
        data.game
      )}&type=suggest&client_id=${CLIENT_ID}&api_version=${TWITCH_API_VERSION}`
    )
    if (
      gameResponse.data.games &&
      gameResponse.data.games[0].box &&
      gameResponse.data.games[0].box.large
    ) {
      data.boxArt = gameResponse.data.games[0].box.large
    }
  }

  store.commit('SET_STREAM_DATA', { ...data })
}

export default middleware
