<template>
    <div class="wheel-container" id="canvas-wrapper">
        <canvas id="wheel" width="448" height="448" @mousedown="setData"></canvas>        
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Wheel from '../lib/Wheel'
    import { IWheel } from '../lib/Wheel'
    import { updateData } from '../services/service'

    export default Vue.extend({
        data() {
            return {
                // todo add wheel type
                wil: {} as IWheel,
            }
        },
        methods: {
            setWheel(): void {
                // todo get and set marks
                const markSystem = 10
                this.wil = new Wheel(
                    document.getElementById('wheel') as HTMLCanvasElement, 
                    this.categories, 
                    markSystem)
            },
            setData(e: MouseEvent): void {
                this.wil.getClickedData(e)
                const mark = this.wil.getData().mark
                const categoryID = this.wil.getData().categoryID
                updateData(mark, categoryID, 'mark')
            },
        },
        mounted() {
            setTimeout(this.setWheel(), 10000)
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
    height: 448px;
    text-align: center;
  }

  #labels, #marks, #wheel {
      position: absolute;
      left: 0;
      top: 0;
}
</style>