import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '../types'
import { defaultState } from '../data/categories'
import { ICategory } from '@/configs/app.config';

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    mutations: {
        decrement: state => state.count--,
        increment: state => state.count++,
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
        updateDesc: (state, obj) => {
            const newDesc = obj.newDesc
            const catID = obj.id

            state.categories.forEach((element: ICategory, index: number) => {
                if (element.id === catID)  {
                    state.categories[index]['description'] = newDesc
                }
            })
        },
        deleteCategory: (state, id) => {
            state.categories.splice(id, 1)
        },
    },
    state: {
        categories: defaultState,
        count: 0,
        version: '1.0.0', // a simple property
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
