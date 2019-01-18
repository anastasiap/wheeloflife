import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '../types'
import { defaultState, gradesList } from '../data/categories'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    mutations: {
        decrement: state => state.count--,
        increment: state => state.count++,
    },
    state: {
        count: 0,
        version: '1.0.0', // a simple property
    },
}

export default new Vuex.Store<RootState>(store)


// export default new Vuex.Store({
//     actions: {

//     },
//     mutations: {
//         updateDefault(state, status) {
//             state.isDefault = status
//         },
//         increment(state) {
//             state.count++
//         },
//     },
//     state: {
//         categories: defaultState,
//         count: 0,
//         isDefault: true,
//     },
// })
