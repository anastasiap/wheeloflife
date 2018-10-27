export default class Category {
    private name: string = ''
    private color: string = ''
    private grading: number = 10
    private mark: number = 0

    constructor(name: string, color: string) {
        this.name = name
        this.color = color
        // this.grading = grading
    }

    /*public setListener() {
        this.on('click', (target) => {
            this.setMark(target.mark);
        })
    }*/

    private setMark(mark: number) {
        this.mark = mark
    }
}
