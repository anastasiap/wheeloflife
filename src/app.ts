import Vue from 'vue';
import template from 'App.vue'

import Header from './components/Header.vue'
import Category from './services/Category'
import defaultState from './data/categories'

export default {
    // app initial state
    data() {
        return {
            categories: [],
            graph: {},
        }
    },
    name: 'App',
    components: {
        Header,
    },
    methods: {
        createCategories: (list: any) => {
            list.forEach((cat: any) => {
                return new Category(cat.name, cat.color)
            })
        }
    },
    mounted: {
        // this.createCategories(this.defaultCategories);
    },
    mixin: [template],
}
