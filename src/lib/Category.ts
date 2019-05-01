
import { ICategory } from '@/types/category'

export class Category implements ICategory {
    public color: string
    public description: string
    public order: number
    public id: number
    public mark: number
    public name: string

    constructor(order: number,
                id: number,
                color = 'gray',
                description = 'Describe what this category means to you',
                mark = 0,
                name = 'Title') {
        this.color = color
        this.description = description
        this.order = order
        this.id = id
        this.mark = mark
        this.name = name
    }
}
