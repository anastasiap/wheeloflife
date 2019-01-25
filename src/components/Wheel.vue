<template>
    <div class="wheel-container">
      <canvas id="canvas3" width="548" height="548"></canvas>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: mapState({
            catNumber: 'categoriesNumber',
            categories: 'categories',
            gradesList: 'gradesList',
            isDefault: 'isDefault',
        }),
        data() {
          return {
            
          }
        },
        methods: {
          pie(canvasEl, weight, height, categories) {
              var radius = height / 2 - 5,
                  centerX = weight / 2,
                  centerY = height / 2,
                  total = 100;

              var lastEnd = 0,
                  offset = Math.PI / 2;

              for (var j = 0; j < categories.length; j++) {
                var thisPart = total / categories.length; 

                canvasEl.beginPath();
                canvasEl.fillStyle = categories[j]['color'];
                canvasEl.moveTo(centerX, centerY);
                
                // Длина окружности, полный круг = Math.PI * 2
                // thisPart / total = размер текущей части поделенная на сумму всех частей (процент части от общей суммы)
                var arcSector = Math.PI * 2 * thisPart / total; 
                
                //M: centerX, centerY, A: radius large-arc-flag: LastEnd -offset | sweep-flag: lastEnd + arcSector - offset
                canvasEl.arc(
                  centerX, 
                  centerY,
                  radius,
                  lastEnd - offset, 
                  lastEnd + arcSector - offset, 
                  false);
                
                canvasEl.lineTo(centerX, centerY);
                canvasEl.fill();
                canvasEl.closePath();

                lastEnd += arcSector;	
              }
            }
        },
        mounted() {
            var canvas = document.getElementById("canvas3"),
                canvasEl = canvas.getContext('2d')

            this.pie(canvasEl, canvas.width, canvas.height, this.categories) 
        },
        name: 'Wheel',
    }
</script>

<style lang="scss">
  .wheel-container {
    margin: 20px auto;
    width: 550px;
    height: 550px;
  }
</style>