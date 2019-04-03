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
         * Update existing category name
         */
        updateItem: (state, obj) => {
            const newItem = obj.newItem
            const catID = obj.id
            const target = obj.target

            // TODO this of some other detector for categories object
            // TODO create one helper function for category update
            state.categories.forEach((element: ICategory, index: number) => {
                if (element.id === catID)  {
                    state.categories[index][target] = newItem
                }
            })
        },

        // /*
        //  * Update existing category name
        //  */
        // updateName: (state, obj) => {
        //     const newName = obj.newName
        //     const catID = obj.id

        //     // TODO this of some other detector for categories object
        //     // TODO create one helper function for category update
        //     state.categories.forEach((element: ICategory, index: number) => {
        //         if (element.id === catID)  {
        //             state.categories[index]['name'] = newName
        //         }
        //     })
        // },
        // /*
        //  * Update existing category mark
        //  */
        // updateMark: (state, obj) => {
        //     const newMark = obj.newMark
        //     const catID = obj.id

        //     // TODO this of some other detector for categories object
        //     // TODO create one helper function for category update
        //     state.categories.forEach((element: ICategory, index: number) => {
        //         if (element.id === catID)  {
        //             state.categories[index]['mark'] = newMark
        //         }
        //     })
        // },
        // /*
        //  * Update existing category description
        //  */
        // updateDesc: (state, obj) => {
        //     const newDesc = obj.newDesc
        //     const catID = obj.id

        //     state.categories.forEach((element: ICategory, index: number) => {
        //         if (element.id === catID)  {
        //             state.categories[index]['description'] = newDesc
        //         }
        //     })
        // },
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
