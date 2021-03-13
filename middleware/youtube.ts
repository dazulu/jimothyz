import { Middleware } from '@nuxt/types'
import axios from 'axios'

const limit = 2

const youTubeMiddleware: Middleware = async ({
  store,
  $config: { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID },
}) => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&maxResults=${limit}&order=date&type=video&key=${YOUTUBE_API_KEY}`

  const youtubeResponse = await axios
    .get(url)
    .then((response) => {
      const items = response.data.items || []
      const videos = items.reduce((accumulator: any, currentValue: any) => {
        const {
          id: { videoId },
          snippet: {
            title,
            thumbnails: { high: image },
          },
        } = currentValue
        return [
          ...accumulator,
          {
            videoId,
            title,
            image,
            url: `https://www.youtube.com/watch?v=${videoId}`,
          },
        ]
      }, [])
      return videos
    })
    .catch((error) => {
      console.log(error.response)
      return {}
    })

  store.commit('SET_VIDEOS_DATA', youtubeResponse)
}

export default youTubeMiddleware
