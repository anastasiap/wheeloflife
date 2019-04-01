import { ICategory } from '@/configs/app.config'

interface ILabel {
    color: string
    coord: number
    name: string
    radius: number
}

interface IArc {
    arc: Path2D
    name: string
    arcType: string
}

interface IUserData {
    categoryName: string
    mark: number
}

export default class Wheel {
    public data: IUserData
    private canvas: HTMLElement
    private ctx: object
    private categories: ICategory[]
    private markSystem: number
    private centerX: number
    private centerY: number
    private radius: number
    private arcs = []

    constructor(canvas: HTMLElement, categories: ICategory[], markSystem: number) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.categories = categories
        this.markSystem = markSystem

        this.centerX = canvas.width / 2
        this.centerY = canvas.height / 2
        this.radius = canvas.width / 2

        // todo check if setting returning value to default values in constructor is a good idea
        this.data = { categoryName: '', mark: 0}

        this.setEventListener()
    }

    public drawWheel(): void {
        // dividing half circle by negative 0.5 for some reason
        // sets the start at the top of a circle
        let startingPoint = -0.5 * Math.PI

        // assume sum of all arcs is 100%
        const total = 100

        // todo ? what's happening here
        const arcLength = total / this.categories.length

        // store the position of each label
        const labels: ILabel[] = []

        // font settings for labels
        // todo move this to config as constants
        const fontSize = Math.floor(this.ctx.height / 33)

        this.ctx.textAlign = 'center'
        this.ctx.textBaseline = 'middle'
        this.ctx.font = `${fontSize} * 3 px Didact Gothic`

        // iterate through given categories to draw arcs
        this.categories.forEach((category) => {
            const arcAngle = arcLength / total * 2 * Math.PI

            this.drawArc(this.radius, startingPoint, arcAngle, category.name, category.color, 'category')
            this.drawMarks(category, startingPoint, arcAngle, this.markSystem)

            // save settings for current arc label
            const coordinates = startingPoint + arcAngle / 2 + Math.PI * 2
            const labelRadius = this.radius * 3 / 4

            labels.push({
                color: category.color,
                coord: coordinates,
                name: category.name,
                radius: labelRadius,
            })

             // move starting point to the end of current arc
            startingPoint += arcAngle
        })

        this.addLabels(labels)
    }

    private drawTextAlongArc(context, str, centerX, centerY, radius, angle, dx, dy, color) {
        context.save()
        context.translate(centerX, centerY)
        context.rotate(-1 * angle / 2) // rotate context
        context.rotate(-1 * (angle / str.length) / 2)

        for (var n = 0; n < str.length; n++) {
            context.rotate(angle / str.length)
            context.save()
            context.translate(0, -1 * radius)

            var char = str[n]

            context.fillText(char, 0, 0)
            context.fillStyle = `color`
            context.restore()
        }
        context.restore()
    }

    private drawArc(radius: number, startingPoint: number, arcAngle: number, name: string, color: string, arcType: string): void {
        const endPoint = startingPoint + arcAngle

        // create Path object with to keep track of each arc
        const section = new Path2D()

        section.moveTo(this.centerX, this.centerY)
        section.arc(this.centerX, this.centerY, radius, startingPoint, endPoint)
        section.lineTo(this.centerX, this.centerY)

        this.ctx.fillStyle = color
        this.ctx.fill(section)

        // save all paths for future manipulations
        const newArc: IArc = { arc: section, name: name, arcType: arcType } 
        this.arcs.push(newArc)
    }

    private drawMarks(category: ICategory, startingPoint: number, arcAngle: number, marks: number): void {
        let counter = 0
        let color = ''
        let markRadius = this.radius
        const marksLabels: ILabel[] = []

        while (counter < marks) {
            this.drawArc(markRadius, startingPoint, arcAngle, `${counter + 1}`, 'rgba(0,0,0, 0.1)', 'mark')

            // save settings for current arc label
            const labelRadius = markRadius - 10
            const coordinates = startingPoint + arcAngle / 2 + Math.PI * 2
            const name = marks - counter

            marksLabels.push({
                color: 'black',
                coord: coordinates,
                name: `${name}`,
                radius: labelRadius,
            })

            // reduce radius by fraction to draw smaller arcs for marks
            markRadius -= this.radius / marks
            counter++
        }

        this.addLabels(marksLabels)
    }

    private addLabels(labels: ILabel[]): void {
        labels.forEach((l: ILabel) => {
            const labelAngle = l.coord
            const dx = this.centerX + l.radius * Math.cos(labelAngle)
            const dy = this.centerY + l.radius * Math.sin(labelAngle)

             this.ctx.fillText(l.name, dx, dy)
             this.ctx.fillStyle = l.color

            //this.drawTextAlongArc(labelsCtx, labelxy[i]['name'], centerX, centerY, radius, thisCategoryPercentage, dx, dy, labelxy[i]['color'])
        })
    }

    private addArc(arc: any): void {
        this.arcs.push(arc)
    }

    private getCursorPosition(event: MouseEvent): object {
        const rect = this.canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        return {x, y}
    }

    private setEventListener(): void {
        //todo fin another way to keep context
        const that = this

        // todo add return void type to callback
        this.canvas.addEventListener('click', (e: MouseEvent): void => {
            const mouseCoords = that.getCursorPosition(e)

            that.getClickedData(mouseCoords)
        })
    }

    private getClickedData(coords: object) {
        const data = {
            categoryName: '',
            mark: 0,
        }
        let marksCollection: number[] = []

        this.arcs.forEach((a: object) => {
            if (this.ctx.isPointInPath(a.arc, coords.x, coords.y)) {
                if (a.arcType === 'category') {
                    data.categoryName = a.name
                } else {
                    marksCollection.push(+a.name)
                }
            }
        })

        data.mark = this.markSystem - this.getMark(marksCollection) + 1
        this.setData(data)
    }

    private getMark(marks: number[]) {
        return marks.reduce((acc, cur) => Math.max(acc, cur), marks[0])
    }

    // todo check how setters and getters work here
    private setData(selected: IUserData) {
        this.data = selected
    }
}
