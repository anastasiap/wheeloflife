import { ICategory } from '@/configs/app.config'

interface ILabel {
    color: string
    coord: number
    name: string
    radius: number
}

export default class Wheel {
    public ctx: object
    public categories: ICategory[]
    public markSystem: number
    public centerX: number
    public centerY: number
    public radius: number
    public arcs = []

    constructor(canvas: HTMLElement, categories: ICategory[], markSystem: number) {
        this.ctx = canvas.getContext('2d')
        this.categories = categories
        this.markSystem = markSystem

        this.centerX = canvas.width / 2
        this.centerY = canvas.height / 2
        this.radius = canvas.width / 2

        this.setEventListener()
    }

    public drawWheel(): void {

        /*
         * Set wheel params
         */
        // dividing half circle by negative 0.5 for some reason
        // sets the start at the top of circle
        let startingPoint = -0.5 * Math.PI

        // assume sum of all arcs is 100%
        const total = 100

        // todo ? what's happening here
        const arcLength = total / this.categories.length

        /*
         * Set text params
         */

        // store the position of each label
        const labels: ILabel[] = []

        // font settings for labels
        const fontSize = Math.floor(this.ctx.height / 33)
        this.ctx.textAlign = 'center'
        this.ctx.font = `${fontSize} * 3 px Didact Gothic`

        // iterate through given categories to draw arcs
        this.categories.forEach((category) => {
            const arcAngle = arcLength / total * 2 * Math.PI

            this.drawArc(this.radius, startingPoint, arcAngle, category)
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

    private drawArc(radius: number, startingPoint: number, arcAngle: number, category: ICategory, color: string): void {
        this.ctx.beginPath()
        this.ctx.arc(this.centerX, this.centerY, radius, startingPoint, startingPoint + arcAngle)
        this.ctx.lineTo(this.centerX, this.centerY)
        this.ctx.fillStyle = color || category.color
        this.ctx.fill()
    }

    private drawMarks(category: ICategory, startingPoint: number, arcAngle: number, marks: number): void {
        let counter = 0
        let color = ''
        let markRadius = this.radius
        const marksLabels: ILabel[] = []

        while (counter < marks) {
            this.drawArc(markRadius, startingPoint, arcAngle, category, 'rgba(0,0,0, 0.1)')

            // save settings for current arc label
            const labelRadius = markRadius - 15
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
        })
    }

    private addArc(arc: any): void {
        this.arcs.push(arc)
    }

    private getCursorPosition(event): void {
        const rect = this.ctx.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        console.log("x: " + x + " y: " + y)

    }

    private setEventListener(): void {
        const that = this

        this.ctx.addEventListener('mousedown', function(e) {
            const rect = that.ctx.getBoundingClientRect()
            const mx = e.clientX - rect.left
            const my = e.clientY - rect.top

            let shapes = myState.shapes

            console.log('click')


            for (var i = l-1; i >= 0; i--) {
              if (shapes[i].contains(mx, my)) {
                console.log('contains')
              }
            }
        }
    }

    private contains(mx, my): boolean {
        // All we have to do is make sure the Mouse X,Y fall in the area between
        // the shape's X and (X + Width) and its Y and (Y + Height)
        //return  (this.x <= mx) && (this.x + this.w >= mx) && (this.y <= my) && (this.y + this.h >= my)
    }
}
