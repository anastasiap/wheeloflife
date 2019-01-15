import Vue from 'vue'
import Vuex from 'vuex'
import { defaultState, gradesList } from '../data/categories'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {

    },
    mutations: {
        updateDefault(state, status) {
            state.isDefault = status
        },
    },
    state: {
        categories: defaultState,
        isDefault: true,
    },
})
