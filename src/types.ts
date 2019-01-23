import { ICategory } from './configs/app.config'

export interface RootState {
    categories: ICategory
    version: string
    count: number
}
