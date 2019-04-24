import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { Category, ICategory } from '@/configs/app.config'
import { getInitialData } from '../services/service'
import { RootState } from '../types'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    actions: {
        getData(context, lang) {
            return getInitialData().then((data) => {
                context.commit('loadDefaultCategories', data[lang])
                return data[lang]
            })
        },
        setInitialCategories(context, data) {
            context.commit('loadDefaultCategories', data)
        },
    },
    mutations: {
        /*
         * Delete category
         */
        deleteCategory: (state, id) => {
            state.categories.splice(id, 1)
            // re-draw the wheel
            state.wheelKey += 1
        },
        /*
         * Load default categories
         */
        loadDefaultCategories(state, payload) {
            state.categories = payload.map((category: ICategory) => {
                return new Category(
                    category.order,
                    category.id,
                    category.color,
                    category.description,
                    category.mark,
                    category.name)
            })

            // re-draw the wheel
            state.wheelKey += 1
        },
        /*
         * Update entry
         */
        updateItem: (state, obj) => {
            state.categories.forEach((element: ICategory, index: any) => {
                if (element.id === obj.id)  {
                    state.categories[index][obj.target] = obj.newItem
                }
            })

            state.wheelKey += 1
        },
        /*
         * Add new empty category
         */
        addCategory(state) {
            // todo set new category to edit mode
            // todo limit number of cats to 20 (wheelKey <= 20)
            const order = state.categories.length
            const id = state.categories[order - 1].id + 1
            state.categories.push(new Category(order, id))
            // re-draw the wheel
            state.wheelKey += 1
        },
        /*
         * Set all marks to zero
         */
        resetMarks(state) {
            state.categories.map((c: ICategory) => c.mark = 0)
            // re-draw the wheel
            state.wheelKey += 1
        },
        /*
         * Re-draw the wheel
         */
        redraWheel(state) {
            state.wheelKey += 1
        },
    },
    state: {
        categories: [] as ICategory[],
        wheelKey: 0 as number,
    },
}

export default new Vuex.Store<RootState>(store)
