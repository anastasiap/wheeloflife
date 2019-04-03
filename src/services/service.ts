import { ICategory } from '../configs/app.config'
import store from '../store/store'

// Should be a promise call to server
// https://forum.vuejs.org/t/help-with-promise-vuex-axios/36253
// https://vuex.vuejs.org/guide/actions.html
export const getInitialData = (): void => {
    return fetch('/data/data.json')
        .then((response) => {
            return response.clone().json()
        })
        .catch((error) => console.log(error))
}

export const updateData = (value: string, categoryID: string, target: string): void => {
    store.commit(`updateItem`, { newItem: value, id: categoryID, target: target })
}