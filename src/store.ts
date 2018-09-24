import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isDefault: true,
        categories: [],
        grades: []
    },
    mutations: {
        updateDefault(state, status) {
            console.log({status});
            state.isDefault = status;
        }
    },
    actions: {

    },
});
