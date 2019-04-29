<template>
    <div class="wheel-container" id="wrapper">
        <canvas id="wheel" @mousedown="setData"></canvas>        
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Wheel from '../../lib/Wheel'
    import { IWheel } from '../../lib/Wheel'
    import { MARK_SYSTEM } from '../../configs/app.config'
    import { updateData } from '../../services/service'

    export default Vue.extend({
        computed: {
            wheelKey(): number {
                return this.$store.state.wheelKey
            },
            canvas() {
                return document.getElementById('wheel') as HTMLCanvasElement
            },
        },
        data() {
            return {
                wil: {} as IWheel,
            }
        },
        methods: {
            setWheel(): void {
                this.wil = new Wheel(this.canvas, this.categories, MARK_SYSTEM)
            },
            setData(e: MouseEvent): void {
                this.wil.getClickedData(e)
                const mark = this.wil.getData().mark
                const categoryID = this.wil.getData().categoryID
                updateData(mark, categoryID, 'mark')
            },
            setResponsiveCanvas(): void {
                const wrapper = document.getElementById('wrapper')
                const canvasElement = document.getElementById('wheel')
                if (wrapper && canvasElement) {
                    const wrapperWidth = wrapper.offsetWidth
                    canvasElement.setAttribute('height', `${wrapperWidth}`)
                    canvasElement.setAttribute('width', `${wrapperWidth}`)
                    wrapper.setAttribute('style', `height: ${wrapperWidth}px;`)
                }
            },
        },
        mounted() {
            this.setResponsiveCanvas()
            this.setWheel()

            // hack to hide font loading
            setTimeout(() => {
                if (this.wheelKey === 0) {
                    this.$store.commit('updateWheelKey')
                }
            }, 50)
        },
        name: 'Wheel',
        props: [ 'categories' ],
    })
</script>

<style lang="scss">
    .wheel-container {
        position: relative;
        margin: 20px auto;
        width: 448px;
        text-align: center;
    }

    #wheel {
        width: 100%;
    }

    #labels, #marks, #wheel {
        position: absolute;
        left: 0;
        top: 0;
    }

    @media (max-width: 520px) { 
        .wheel-container {
            // width: 300px;
            // height: 300px;
            margin: 0;
        }
    }

    .hide-visually {
        visibility: hidden;
    }
</style>