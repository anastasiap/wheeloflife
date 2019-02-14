<template>
    <div class="wheel-container">
        <canvas id="canvas3" width="548" height="548"></canvas>
    </div>
</template>

<script>
    export default {
        methods: {
            createWheel(canvasEl, width, height, categories) {
                var radius = height / 2 - 5,
                    centerX = width / 2,
                    centerY = height / 2,
                    total = 100; // percentage

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
                    
                    // M: centerX, centerY, 
                    // A: radius 
                    // large-arc-flag: LastEnd - offset 
                    // sweep-flag: lastEnd + arcSector - offset

                    // конец предыдущей арки минус длина окружности
                    var startAngle = lastEnd - offset;
                    console.log('startAngle', startAngle); 
                    // конец предылущей арки + размер текущей арки - минус длина окружности
                    var endAngle = lastEnd + arcSector - offset;
                    console.log('endAngle', endAngle); 
                    
                    canvasEl.arc(
                        centerX, 
                        centerY,
                        radius,
                        startAngle,  
                        endAngle, 
                        false
                    );

                    // click on path 
                    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInPath

                    canvasEl.lineTo(centerX, centerY);
                    canvasEl.fill();
                    canvasEl.closePath();

                    lastEnd += arcSector; 
                }
            },

            createMarks(canvasEl, width, height, categories) {
                var radius = height / 2 - 5,
                    centerX = width / 2,
                    centerY = height / 2,
                    total = 100; // percentage

                var lastEnd = 0,
                    offset = Math.PI / 2;

                for (var j = 0; j < categories.length; j++) {
                    var thisPart = total / categories.length; 

                    canvasEl.beginPath();
                    canvasEl.fillStyle = 'rgba(0,0,0,0.3)';
                    canvasEl.moveTo(centerX, centerY);
                    
                    var arcSector = Math.PI * 2 * thisPart / total; 
                
                    var startAngle = lastEnd - offset;
                    var endAngle = lastEnd + arcSector - offset;
                    
                    canvasEl.arc(
                        centerX, 
                        centerY,
                        radius / 10,
                        startAngle,  
                        endAngle, 
                        false
                    );

                    canvasEl.lineTo(centerX, centerY);
                    canvasEl.fill();
                    canvasEl.closePath();

                    lastEnd += arcSector; 
                }

            }
        },
        mounted() {
            var canvas = document.getElementById("canvas3"),
                canvasEl = canvas.getContext('2d'),
                gradeSystem = 10

            this.createWheel(canvasEl, canvas.width, canvas.height, this.categories)
            
            var counter = 0;

            //while (counter < gradeSystem) {
                this.createMarks(canvasEl, canvas.width, canvas.height, this.categories)
                //counter++
            //}
        },
        name: 'Wheel',
        props: [ 'categories' ],
    }
</script>

<style lang="scss">
  .wheel-container {
    margin: 20px auto;
    width: 550px;
    height: 550px;
  }
</style>