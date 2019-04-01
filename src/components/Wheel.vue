<template>
    <div class="wheel-container" id="canvas-wrapper">
        <canvas id="wheel" width="408" height="408"></canvas>        
    </div>
</template>

<script>
    import Wheel from '../lib/Wheel'

    export default {
        mounted() {
            // todo get and set marks
            const markSystem = 10

            const wil = new Wheel(document.getElementById("wheel"), this.categories, markSystem)
            wil.drawWheel()
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