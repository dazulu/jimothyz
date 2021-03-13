import { GetterTree, MutationTree } from 'vuex'

export interface Stream {
    online?: boolean,
    viewers?: number,
    game?: string,
    status?: string,
    partner?: string,
    views?: number,
    followers?: number,
    url?: string,
    noConnection?: boolean
    boxArt?: string
}


export const state = () => ({
    stream: {} as Stream
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    stream: state => state.stream,
}

export const mutations: MutationTree<RootState> = {
    SET_STREAM_DATA: (state, data: Stream) => state.stream = { ...state.stream, ...data },
}