import { ICategory } from '../configs/app.config'
import store from '../store/store'

// Should be a promise call to server
// https://forum.vuejs.org/t/help-with-promise-vuex-axios/36253
// https://vuex.vuejs.org/guide/actions.html

// todo replace promise any with type
export const getInitialData = (): Promise<ICategory[]> => {
    return fetch('/data/data.json')
        .then((response) => {
            return response.clone().json()
        })
        .catch((error) => {
            throw new Error('Something wrong with initial data')
        })
}

export const updateData = (value: number | string, categoryID: number, target: string): void => {
    store.commit('updateItem', { newItem: value, id: categoryID, target })
}
