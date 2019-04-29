import { ICategory } from './configs/app.config'
export interface RootState {
    categories: ICategory[]
    homeWheel: number
    wheelKey: number
    descriptionKey: number
    lang: string
}
