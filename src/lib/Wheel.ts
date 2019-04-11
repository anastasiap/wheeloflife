import { ICategory } from '@/configs/app.config'
import { shadeColor } from '../services/helpers'

export interface IWheel {
    data: IUserData
    getData(): IUserData
    getClickedData(e: MouseEvent): void
}

interface ILabel {
    color: string
    coord: number
    name: string
    radius: number
}
interface IArc {
    arc: Path2D
    name: number
    arcType: string
}

interface IUserData {
    categoryID: number
    mark: number
}

interface ICoords {
    x: number
    y: number
}

export default class Wheel implements IWheel {
    public data!: IUserData
    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private categories: ICategory[]
    private markSystem: number
    private centerX: number
    private centerY: number
    private radius: number
    private arcs: IArc[] = []

    constructor(canvas: HTMLCanvasElement, categories: ICategory[], markSystem: number) {
        this.canvas = canvas as HTMLCanvasElement
        // todo learn wtf is assertion
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        this.categories = categories
        this.markSystem = markSystem

        this.centerX = canvas.width / 2
        this.centerY = canvas.height / 2
        this.radius = canvas.width / 2

        // todo check if setting default values in constructor is a good idea
        this.setData({ categoryID: 0, mark: 0})
        this.drawWheel()
    }

    // todo check how setters and getters work here
    public getData(): IUserData {
        return this.data
    }

    public getClickedData(e: MouseEvent): void {
        const marksCollection: IArc[] = []
        const coords: ICoords = this.getCursorPosition(e)

        this.arcs.forEach((a: IArc) => {
            if (this.ctx.isPointInPath(a.arc, coords.x, coords.y)) {
                if (a.arcType === 'category') {
                    this.data.categoryID = a.name
                } else {
                    marksCollection.push(a)
                }
            }
        })

        const markArc = marksCollection[0]

        this.data.mark = markArc.name
        this.ctx.fillStyle = 'rgba(0,0,0, 0.65)'
        this.ctx.fill(markArc.arc)
        console.log(this.data.mark)
    }

    private drawWheel(): void {
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
        const fontSize = Math.floor(this.canvas.height / 33)

        this.ctx.textAlign = 'center'
        this.ctx.textBaseline = 'middle'
        this.ctx.font = `${fontSize} * 3 px Didact Gothic`

        // iterate through given categories to draw arcs
        this.categories.forEach((category) => {
            const arcAngle = arcLength / total * 2 * Math.PI

            this.drawArc(this.radius, startingPoint, arcAngle, category.id, category.color, 'category')
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

    private drawTextAlongArc(context, str, centerX, centerY, radius, arcAngle, dx, dy, color) {
        context.save()
        context.translate(centerX, centerY)
        context.rotate(-1 * arcAngle / 2) // rotate context
        context.rotate(-1 * (arcAngle / str.length) / 2)

        for (var n = 0; n < str.length; n++) {
            context.rotate(arcAngle / str.length)
            context.save()
            context.translate(0, -1 * radius)

            var char = str[n]

            context.fillText(char, 0, 0)
            context.fillStyle = color
            context.restore()
        }
        context.restore()
    }

    private drawArc(
        radius: number,
        startingPoint: number,
        arcAngle: number,
        id: number,
        color: string,
        arcType: string): void {
            const endPoint = startingPoint + arcAngle

            // create Path object with to keep track of each arc
            const section = new Path2D()

            section.moveTo(this.centerX, this.centerY)
            section.arc(this.centerX, this.centerY, radius, startingPoint, endPoint)
            section.lineTo(this.centerX, this.centerY)

            this.ctx.fillStyle = color
            this.ctx.fill(section)

            // save all paths for future manipulations
            const newArc: IArc = { arc: section, name: id, arcType }
            this.arcs.push(newArc)
    }

    private drawMarks(category: ICategory, startingPoint: number, arcAngle: number, marks: number): void {
        let counter = 0
        const currentMark = category.mark
        let markRadius = this.radius / marks
        const marksLabels: ILabel[] = []

        while (counter < marks) {
            let markColor = 'transparent'

            if (counter < currentMark) {
                markColor = shadeColor(category.color, -35)
            }

            this.drawArc(markRadius, startingPoint, arcAngle, counter + 1, markColor, 'mark')

            // save settings for current arc label
            const labelRadius = markRadius - 10
            const coordinates = startingPoint + arcAngle / 2 + Math.PI * 2
            const name = counter + 1

            marksLabels.push({
                color: 'black',
                coord: coordinates,
                name: `${name}`,
                radius: labelRadius,
            })

            // reduce radius by fraction to draw smaller arcs for marks
            markRadius += this.radius / marks
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

            // this.drawTextAlongArc(
            //     labelsCtx,
            //     labelxy[i]['name'],
            //     centerX,
            //     centerY,
            //     radius,
            //     thisCategoryPercentage,
            //     dx, dy,
            //     labelxy[i]['color'])
        })
    }

    private getCursorPosition(event: MouseEvent): ICoords {
        const rect = this.canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        return {x, y}
    }

    private getMark(marks: number[]): number {
        return marks.reduce((acc, cur) => Math.min(acc, cur), marks[0])
    }

    // todo check how setters and getters work here
    private setData(selected: IUserData): void {
        this.data = selected
    }
}
