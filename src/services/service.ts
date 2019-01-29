import { ICategory } from '../configs/app.config'
import { data } from '../data/data.json'

// Should be a promise call to server
// https://forum.vuejs.org/t/help-with-promise-vuex-axios/36253
// https://vuex.vuejs.org/guide/actions.html
export const getInitialData = (): void => {
    return fetch('/data/data.json')
        .then((response) => {
            console.log('service res', )
            let clone = response.clone();
            return clone.json()
        })
        .catch((error) => console.log(error))
}
