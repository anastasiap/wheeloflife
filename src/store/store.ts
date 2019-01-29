import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { getInitialData } from '../services/service'
import { RootState } from '../types'
import { ICategory, Category } from '@/configs/app.config';

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    mutations: {
        /*
         * Update existing category name
         */
        updateName: (state, obj) => {
            const newName = obj.newName
            const catID = obj.id

            // TODO this of some other detector for categories object
            // TODO create one helper function for category update
            state.categories.forEach((element: ICategory, index: number) => {
                if (element.id === catID)  {
                    state.categories[index]['name'] = newName
                }
            })
        },
        /*
         * Update existing category description
         */
        updateDesc: (state, obj) => {
            const newDesc = obj.newDesc
            const catID = obj.id

            state.categories.forEach((element: ICategory, index: number) => {
                if (element.id === catID)  {
                    state.categories[index]['description'] = newDesc
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
        /*
         * Load default categories
         */
        loadDefaultCategories(state, payload) {
            console.log(getInitialData());
            state.categories = payload;
        },
    },
    actions: {
        getData(context){
            return getInitialData().then((data) => {
                context.commit('loadDefaultCategories', data)
                console.log('res store', data)
                return data
            })
        },
        setInitialCategories(context, data) {
            context.commit('loadDefaultCategories', data)
        },
    },
    state: {
        categories: 'getInitialData().then((res) => res.data)',
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
