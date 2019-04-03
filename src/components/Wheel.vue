<template>
    <div class="wheel-container" id="canvas-wrapper">
        <canvas id="wheel" width="408" height="408" @click="setData"></canvas>        
    </div>
</template>

<script lang="ts">
    import Wheel from '../lib/Wheel'
    import { updateData } from '../services/service'

    export default {
        data() {
            return {
                wil: {} as object,
            }
        },
        methods: {
            setWheel() {
                // todo get and set marks
                const markSystem = 10
                this.wil = new Wheel(document.getElementById("wheel"), this.categories, markSystem)
            },
            setData(e: MouseEvent) {
                this.wil.getClickedData(e);
                const mark = this.wil.getData().mark
                const categoryID = this.wil.getData().categoryID

                console.log({mark}, {categoryID})

                updateData(mark, categoryID, 'mark')
            },
        },
        mounted() {
            this.setWheel();
            
        },
        name: 'Wheel',
        props: [ 'categories' ],
    }
</script>

<style lang="scss">
  .wheel-container {
    position: relative;
    margin: 20px auto;
    width: 410px;
    height: 410px;
    text-align: center;
  }

  #labels, #marks, #wheel {
      position: absolute;
      left: 0;
      top: 0;
}
</style>