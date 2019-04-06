// Routes config
export const routes: {[key: string]: {[key: string]: string}} = {
    // home: {
    //     name: 'Home',
    //     path: '/',
    // },
    // help: {
    //     name: 'How To',
    //     path: '/howto',
    // },
    // info: {
    //     name: 'Useful info',
    //     path: 'info',
    // },
}

// i18n config
export const messages = {
    en: {
        addCat: 'Add category',
        download: 'Download result',
        hello: 'hello world',
        labelEditCategory: 'Edit description or color',
        resetMarks: 'Reset marks',
        resetWheel: 'Reset wheel changes',
    },
    ru: {
        addCat: 'Добавить категорию',
        download: 'Скачать результат',
        hello: 'Привет!',
        labelEditCategory: 'Изменить текст или цвет',
        resetMarks: 'Обнулить оценки',
        resetWheel: 'Сбросить изменения колеса',
    },
}

// Constants
// export const LANGUAGES = {
//     'ru': 'Русский',
//     'en': 'English',
// }

export const LANGUAGES = [
    'Русский',
    'English',
]

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
    [key: string]: any
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
