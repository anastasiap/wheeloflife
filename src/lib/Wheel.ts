import { ICategory } from '@/configs/app.config'
import { shadeColor } from '../services/helpers'

export interface IWheel {
    data: IUserData
    getData(): IUserData
    getClickedData(e: MouseEvent): void
}

interface ILabel {
    angle?: number
    color: string
    coord: number
    name: string
    radius: number
    startingPoint?: number
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
    // todo why the hell is static at the top? what is static method?

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
        this.centerX = canvas.width / 2
        this.centerY = canvas.height / 2
        this.radius = (canvas.width - 50) / 2

        this.categories = categories
        this.markSystem = markSystem

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
        this.fillArc('rgba(0,0,0, 0.65)', markArc.arc)
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

        // iterate through categories to draw arcs
        this.categories.forEach((category) => {
            const arcAngle = arcLength / total * 2 * Math.PI

            this.drawArc(this.radius, startingPoint, arcAngle, category.id, category.color, 'category')
            this.drawMarks(category, startingPoint, arcAngle, this.markSystem)

            // save settings for current arc label if placed inside the wheel
            const coordinates = startingPoint + arcAngle / 2 + Math.PI * 2
            const labelRadius = this.radius * 3 / 4

            labels.push({
                angle: arcAngle,
                color: category.color,
                coord: coordinates,
                name: category.name,
                radius: labelRadius,
                startingPoint: startingPoint,
            })

             // move starting point to the end of current arc
            startingPoint += arcAngle
        })

        this.addLabels(labels)
    }

    private drawArc(
        radius: number,
        startingPoint: number,
        arcAngle: number,
        id: number,
        color: string,
        arcType: string): void {
            console.log('drawArc startingPoint', startingPoint)
            const endPoint = startingPoint + arcAngle

            // create Path object with to keep track of each arc
            const section = new Path2D()

            section.moveTo(this.centerX, this.centerY)
            section.arc(this.centerX, this.centerY, radius, startingPoint, endPoint)
            section.lineTo(this.centerX, this.centerY)

            // TODO move to a function eg fillArc()
            this.fillArc(color, section)

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
                markColor = shadeColor(category.color, -65)
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

            if (l.angle !== undefined && l.startingPoint !== undefined) {
                this.drawTextAlongArc(l.name, l.color, l.angle, l.startingPoint)
            } else {
                this.ctx.fillText(l.name, dx, dy)
                this.ctx.fillStyle = l.color
            }

            this.ctx.fillText(l.name, dx, dy)
            this.ctx.fillStyle = l.color
        })
    }

    private drawTextAlongArc(label: string, color: string, arcAngle: number, startingPoint: number) {
        // todo replace with constant
        const labeCentering = (arcAngle) / 2  + (label.length * 0.04 / 2)

        this.ctx.save()

        this.ctx.translate(this.centerX, this.centerY)
        // hack. aligns labels with arcs
        this.ctx.rotate(startingPoint + Math.PI / 2 + arcAngle)

        // rotate context in counterclock direction by half length (center) of angle
        this.ctx.rotate(-1 * labeCentering)
        // rotate context in counterclock direction by half length of a letter (center)
        // this.ctx.rotate(-1 * (arcAngle / label.length) / 2)

        for (const n of label) {
            // rotate context in clockwise direction by letter size
            // can be done by actual letter size - const charLength = arcAngle / label.length
            // todo replace with constant
            this.ctx.rotate(0.04)

            this.ctx.save()

            // move context to x = 0, y = -224
            this.ctx.translate(0, -1 * this.radius)
            this.ctx.font = 'bold 25px Amatic SC'
            this.ctx.textBaseline = 'bottom'
            this.ctx.fillStyle = color
            this.ctx.fillText(n, 0, 0)

            this.ctx.restore()
        }

        this.ctx.restore()
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

    private fillArc(color: string, target: Path2D): void {
        this.ctx.fillStyle = color
        this.ctx.fill(target)
    }
}
