// Routes config
export const routes: {[key: string]: {[key: string]: string}} = {
    home: {
        name: 'Home',
        path: '/',
    },
    help: {
        name: 'How To',
        path: '/howto',
    },
    info: {
        name: 'Useful info',
        path: 'info',
    },
}

// i18n config
export const messages = {
    en: {
        message: {
            hello: 'hello world',
        },
    },
    ru: {
        message: {
            hello: 'Привет',
        },
    },
}

// Constants

/* Can be used to get set IDs  */
enum Categories { Health, Finances }

// Interfaces
export interface ICategory {
    color: string
    description: string
    order: number
    id: number
    mark: number
    name: string
}

export class Category implements ICategory {
    public color: string
    public description: string
    public order: number
    public id: number
    public mark: number
    public name: string

    constructor(order: number, id: number) {
        this.color = 'gray'
        this.description = 'Describe what this category mean to you'
        this.order = order
        this.id = id
        this.mark = 0
        this.name = 'Title'
    }
}
