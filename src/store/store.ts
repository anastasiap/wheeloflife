import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isDefault: false,
        categories: [],
        grades: []
    },
    mutations: {
        updateDefault(state, status) {
            state.isDefault = status;
        }
    },
    actions: {

    },
});
