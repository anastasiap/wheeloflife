import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { Category } from '@/lib/Category'
import { getInitialData } from '@/services/service'
import { ICategory } from '@/types/category'
import { RootState } from '@/types/store'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    actions: {
        getData(context, lang) {
            return getInitialData().then((data) => {
                context.commit('loadDefaultCategories', data[lang])
                return data[lang]
            })
        },
        // TODO check if needed, might be replaced with getData
        setInitialCategories(context, data) {
            context.commit('loadDefaultCategories', data)
        },
    },
    mutations: {
        /*
         * Delete category
         */
        deleteCategory: (state, id) => {
            state.categories.forEach((c, idx) => {
                if (c.id === id)  {
                    state.categories.splice(idx, 1)
                }
            })

            // re-draw the wheel
            state.wheelKey += 1
            state.descriptionKey += 1
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
            state.wheelKey = 0
            state.descriptionKey = 0
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
            state.descriptionKey += 1
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
         * Redraw the wheel
         */
        updateWheelKey(state) {
            state.wheelKey += 1
        },
        /*
         * Redraw the wheel
         */
        updateDescriptionKey(state) {
            state.descriptionKey += 1
        },
        /*
         * Set current language
         */
        setLang(state, lang) {
            state.lang = lang
        },
        /*
         * Update home page
         */
        updateHome(state) {
            state.homeWheelKey += 1
        },
    },
    state: {
        categories: [] as ICategory[],
        descriptionKey: 0 as number,
        homeWheelKey: 0 as number,
        lang: '' as string,
        wheelKey: 0 as number,
    },
}

export default new Vuex.Store<RootState>(store)
