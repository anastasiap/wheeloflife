import { ICategory } from './category'

export interface RootState {
    categories: ICategory[]
    homeWheelKey: number
    wheelKey: number
    descriptionKey: number
    lang: string
}
