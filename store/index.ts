import { GetterTree, MutationTree } from 'vuex'

export interface Stream {
  online?: boolean
  viewers?: number
  game?: string
  status?: string
  partner?: string
  views?: number
  followers?: number
  url?: string
  noConnection?: boolean
  boxArt?: string
}

export interface Video {
  videoId: string
  title: string
  image: {
    url: string
    width: number
    height: number
  }
}

export type Videos = Array<Video>

export const state = () => ({
  stream: {} as Stream,
  videos: {} as Videos,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  stream: (state) => state.stream,
  videos: (state) => state.videos,
}

export const mutations: MutationTree<RootState> = {
  SET_STREAM_DATA: (state, data: Stream) =>
    (state.stream = { ...state.stream, ...data }),
  SET_VIDEOS_DATA: (state, data: Videos) =>
    (state.videos = { ...state.videos, ...data }),
}
