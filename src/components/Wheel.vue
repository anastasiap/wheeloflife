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
                        // конец предылущей арки + размер текущей арки - минус длина окружности
                    var endAngle = lastEnd + arcSector - offset;
                        
                        canvasEl.arc(centerX, centerY, radius, startAngle, endAngle, false);

                        // click on path https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInPath

                        canvasEl.lineTo(centerX, centerY);
                        canvasEl.fill();
                        canvasEl.closePath();

                        lastEnd += arcSector; 

                        // start marks
                        var counter = 0;
                        var gradeSystem = 10;
                        var color = '';
                        var startMarkX = centerX;
                        var startMarkY = centerY;
                        var markRadius = radius;


                    while (counter < gradeSystem) {

                        if (counter === 0) {
                            color = 'blue'
                        } else if (counter === 1) {
                            color = 'yellow'
                        } else if (counter === 2) {
                            color = 'red'
                        } else if (counter === 3) {
                            color = 'green'
                        } else if (counter === 4) {
                            color = 'orange'
                        } else if (counter === 5) {
                            color = 'darkred'
                        } else if (counter === 6) {
                            color = 'darkblue'
                        } else if (counter === 7) {
                            color = 'lightblue'
                        } else if (counter === 8) {
                            color = 'purple'
                        } else if (counter === 9) {
                            color = 'black'
                        } else if (counter === 10) {
                            color = 'grey'
                        }

                        this.createMarks(canvasEl, this.categories, markRadius, centerX, centerY, total, color)
                        markRadius -= radius / 10;
                        counter++
                    }
                }
            },

            createMarks(canvasEl, categories, radius, startX, startY, total, color) {
                console.log('radius', radius);
                var lastEnd = 0,
                    offset = Math.PI / 2;
                
                var thisPart = total / categories.length; 

                    canvasEl.beginPath();
                    canvasEl.fillStyle = color;
                    canvasEl.strokeStyle = 'blue';

                    // какие координаты у линии проведенной до десятой части радиуса
                    canvasEl.moveTo(startX, startY);
                    
                var arcSector = Math.PI * 2 * thisPart / total; 
                var startAngle = lastEnd - offset;
                var endAngle = lastEnd + arcSector - offset;
                    
                    canvasEl.arc(
                        startX, 
                        startY,
                        radius,
                        startAngle,  
                        endAngle, 
                        false
                    );

                    canvasEl.lineTo(startX, startY);
                    canvasEl.fill();
                    canvasEl.stroke();
                    canvasEl.closePath();

                    lastEnd += arcSector; 
            }
        },
        mounted() {
            var canvas = document.getElementById("canvas3"),
                canvasEl = canvas.getContext('2d');
            
                this.createWheel(canvasEl, canvas.width, canvas.height, this.categories)
            
            
            
            // var counter = 0;

            // var radius = canvas.height / 2 - 5,
            //     startX = canvas.width / 2,
            //     startY = canvas.height / 2,
            //     total = 100; // percentage
            
            // var color, endAngle;
            // while (counter < gradeSystem) {
            //     console.log(counter);
            //     if (counter === 0) {
            //         color = 'blue'
            //     } else if (counter === 1) {
            //         color = 'yellow'
            //     } else if (counter === 2) {
            //         color = 'red'
            //     } else if (counter === 3) {
            //         color = 'green'
            //     } else if (counter === 4) {
            //         color = 'orange'
            //     } else if (counter === 5) {
            //         color = 'darkred'
            //     } else if (counter === 6) {
            //         color = 'darkblue'
            //     } else if (counter === 7) {
            //         color = 'lightblue'
            //     } else if (counter === 8) {
            //         color = 'purple'
            //     } else if (counter === 9) {
            //         color = 'black'
            //     } else if (counter === 10) {
            //         color = 'grey'
            //     }


            //     endAngle = this.createMarks(canvasEl, this.categories, radius, startX, startY, total, color)
            //     console.log('endAngle',endAngle)
            //     startX += startX + Math.cos(endAngle) - radius / 10;
            //     startY += startY + Math.sin(endAngle) * radius / 10;
            //     counter++
            // }
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