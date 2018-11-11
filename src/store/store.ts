import Vue from 'vue';
import Vuex from 'vuex';
import { defaultState, gradesList } from '../data/categories'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isDefault: true,
        categories: defaultState,
        gradesList: gradesList,
    },
    mutations: {
        updateDefault(state, status) {
            state.isDefault = status;
        },
        updateNumber(state, num) {
            state.categoriesNumber = num;
        }
    },
    actions: {

    },
});
