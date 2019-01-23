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

// Interfaces
export interface ICategory {
    color: string
    description: string
    order: number
    id: number
    mark: number
    name: string
}
