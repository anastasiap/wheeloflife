// Mark system
export const MARK_SYSTEM = 10

// Number of category columns
export const COLUMNS_NUMBER = 2

// i18n config
export const messages = {
    en: {
        addCat: 'Add category',
        cancel: 'Cancel',
        deleteCategoryWarning: 'This will delete the category. Continue?',
        download: 'Download result',
        labelEditCategory: 'Edit description or color',
        resetMarks: 'Reset marks',
        resetMarksWarning: 'This will reset all your marks to 0. Continue?',
        resetWheel: 'Drop all changes',
        resetWheelWarning: 'This will delete your categories and marks. Continue?',
        siteSubTitle: ': online quick tool',
        siteTitle: 'Wheel of Life',
        warning: 'Warning',
    },
    ru: {
        addCat: 'Добавить категорию',
        cancel: 'Отменить',
        deleteCategoryWarning: 'Удалить эту категорию?',
        download: 'Скачать результат',
        labelEditCategory: 'Изменить текст или цвет',
        resetMarks: 'Обнулить оценки',
        resetMarksWarning: 'Это сбросит все ваши оценки. Продолжить?',
        resetWheel: 'Сбросить все изменения',
        resetWheelWarning: 'Это удалит все ваши категории и оценки. Продолжить?',
        siteSubTitle: '',
        siteTitle: 'Колесо жизненного баланса',
        warning: 'Внимание',
    },
}

export const LANGUAGES = [
    'en',
    'ru',
]

export const LANG_MAP = {
    en: 'English',
    ru: 'Русский',
}

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
