export interface ICategory {
    name: string
    grade: number
    bgColor: string
    activeStyle: string
}

export const gradesList = [{
    grade: 10,
    bgColor: ''
  }, {
    grade: 9,
    bgColor: ''
  }, {
    grade: 8,
    bgColor: ''
  }, {
    grade: 7,
    bgColor: ''
  }, {
    grade: 6,
    bgColor: ''
  }, {
    grade: 5,
    bgColor: ''
  }, {
    grade: 4,
    bgColor: ''
  }, {
    grade: 3,
    bgColor: ''
  }, {
    grade: 2,
    bgColor: ''
  }, {
    grade: 1,
    bgColor: ''
}]

export const defaultState: ICategory[] = [{
    name: 'Image',
    grade: 0,
    bgColor: 'pink',
    activeStyle: ''
}, {
    name: 'Economics',
    grade: 0,
    bgColor: 'green',
    activeStyle: ''
}, {
    name: 'Education',
    grade: 0,
    bgColor: 'blue',
    activeStyle: ''
}, {
    name: 'Family',
    grade: 0,
    bgColor: 'yellow',
    activeStyle: ''
}, {
    name: 'Creative / Art',
    grade: 0,
    bgColor: 'pink',
    activeStyle: ''
}, {
    name: 'Health',
    grade: 0,
    bgColor: 'green',
    activeStyle: ''
}, {
    name: 'Love',
    grade: 0,
    bgColor: 'blue',
    activeStyle: ''
}, {
    name: 'Sex',
    grade: 0,
    bgColor: 'yellow',
    activeStyle: ''
}, {
    name: 'Altruism',
    grade: 0,
    bgColor: 'pink',
    activeStyle: ''
}, {
    name: 'Work',
    grade: 0,
    bgColor: 'green',
    activeStyle: ''
}, {
    name: 'Friendship',
    grade: 0,
    bgColor: 'blue',
    activeStyle: ''
}, {
    name: 'Spiritual',
    grade: 0,
    bgColor: 'yellow',
    activeStyle: ''
}
]
