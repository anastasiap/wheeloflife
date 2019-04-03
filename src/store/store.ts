import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { Category } from '@/configs/app.config'
import { getInitialData } from '../services/service'
import { RootState } from '../types'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    mutations: {
        /*
         * Load default categories
         */
        loadDefaultCategories(state, payload) {
            state.categories = payload
        },
        /*
         * Update entry
         */
        updateItem: (state, obj) => {
            state.categories.forEach((element: ICategory, index: number) => {
                if (element.id === obj.id)  {
                    state.categories[index][obj.target] = obj.newItem
                }
            })
        },
        /*
         * Delete category
         */
        deleteCategory: (state, id) => {
            state.categories.splice(id, 1)
        },
        /*
         * Add new empty category
         */
        addCategory(state) {
            // set new category to edit mode
            const order = state.categories.length;
            const id = state.categories[order - 1]['id'] + 1
            state.categories.push(new Category(order, id))
        },
        /*
         * Set all marks to zero
         */
        resetMarks(state){
            state.categories.map((c: ICategory) => c.mark = 0)
        },
    },
    actions: {
        getData(context, lang){
            return getInitialData().then((data) => {
                context.commit('loadDefaultCategories', data[lang])
                return data[lang]
            })
        },
        setInitialCategories(context, data) {
            context.commit('loadDefaultCategories', data)
        },
    },
    state: {
        categories: [] as ICategory[],
    },
}

export default new Vuex.Store<RootState>(store)
