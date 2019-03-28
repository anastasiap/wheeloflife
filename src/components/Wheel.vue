<template>
    <div class="wheel-container" id="canvas-wrapper">
        <canvas id="labels" width="408" height="408"></canvas>
        <canvas id="wheel" width="408" height="408"></canvas>
        <canvas id="marks" width="408" height="408"></canvas>
    </div>
</template>

<script>
    import Wheel from '../lib/Wheel'

    export default {
        methods: {
            // todo refactor - one function creates arc. other functions set other things
            createWheel(canvasEl, width, height, categories) {
                const total = 100;

                const centerX = width / 2;
                const centerY = height / 2;
                const radius = height / 2;

                let currentAngle = -0.5 * Math.PI;
            
                for (let category of categories) {
                    var thisCategoryPercentage = total / categories.length;

                    let sliceAngle = 2 * Math.PI * thisCategoryPercentage / total;
                    canvasEl.beginPath();
                    
                    // рисуе арку
                    canvasEl.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
                    
                    currentAngle += sliceAngle;
                    canvasEl.lineTo(centerX, centerY);
                    canvasEl.fillStyle = category.color;
                    canvasEl.fill();
                }


                //var radius = height / 2 - 5,  // TODO why 5?
                    centerX = width / 2,
                    centerY = height / 2,
                    total = 100, // percentage
                    lastEnd = 0;

                    var lradius = radius * 3 / 6; 
                //store the position of each label which is calculated when the graph is drawn
                var labelxy = [];
                var fontSize = Math.floor(canvasEl.height / 33);
                    canvasEl.textAlign = 'center';
                    canvasEl.font = fontSize * 3 + "px Arial";

                    const marksCanvas = document.getElementById("marks");
                    const marksCtx = marksCanvas.getContext('2d');

                for (var j = 0; j < categories.length; j++) {
                    var thisCategoryPercentage = total / categories.length; //   

                        canvasEl.beginPath();
                        //canvasEl.fillStyle = `rgba(${categories[j]['color']}, 0.5)`;
                        //canvasEl.fillStyle = "transparent";
                        canvasEl.fillStyle = categories[j]['color'];
                        canvasEl.moveTo(centerX, centerY);
                        
                        // Длина окружности, полный круг = Math.PI * 2
                        // thisCategoryPercentage / total = размер текущей части поделенная на сумму всех частей 
                        // (процент части от общей суммы)
                    
                    // angle taken up by the arc 
                    var arcSector = Math.PI * 2 * thisCategoryPercentage / total; // длина окружности этой секции
                    
                        
                        // M: centerX, centerY, 
                        // A: radius 
                        // large-arc-flag: LastEnd - offset 
                        // sweep-flag: lastEnd + arcSector - offset

                        // конец предыдущей арки 
                    var startAngle = lastEnd;                   
                        // конец текущей арки = конец предыдущей арки + размер текущей арки
                    var endAngle = lastEnd + arcSector;
                        
                        canvasEl.arc(centerX, centerY, radius, startAngle, endAngle, false);

                        // click on path https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInPath
                        canvasEl.lineTo(centerX, centerY);
                        canvasEl.fill();    
                        canvasEl.closePath();

                        lastEnd += arcSector; 
                           
                        this.createMarkArc(canvasEl, marksCtx, categories, radius, centerX, centerY, total, startAngle)
                   
                    let coordinates = lastEnd + arcSector / 2 + Math.PI;
                    let categoryName = categories[j]['name'];
                    labelxy.push({coord: coordinates, name: categoryName, radius: arcSector, color: categories[j]['color']});
                }

                const labelsCanvas = document.getElementById("labels");
                const labelsCtx = labelsCanvas.getContext('2d');

                console.log(labelxy);
            
                labelxy.forEach((c) => {
                    console.log(c);
                    const langle = c['coord'];
                    const dx = centerX + lradius * Math.cos(langle);
                    const dy = centerY + lradius * Math.sin(langle);
                    
                    canvasEl.fillText(c['name'], dx, dy);
                    canvasEl.fillStyle = c['color'];	
                    
                    //var angle2 = Math.PI * 0.8; // radians
                    
                    // console.log('centerX', centerX);
                    // console.log('centerY', centerY);
                    
                    this.drawTextAlongArc(labelsCtx, labelxy[i]['name'], centerX, centerY, radius, thisCategoryPercentage, dx, dy, labelxy[i]['color']);
                
                })
             
            },

            drawTextAlongArc(context, str, centerX, centerY, radius, angle, dx, dy, color) {
                context.save();
                context.translate(centerX, centerY);
                context.rotate(-1 * angle / 2); // rotate context
                context.rotate(-1 * (angle / str.length) / 2); 


                for (var n = 0; n < str.length; n++) {
                    context.rotate(angle / str.length);
                    context.save();
                    context.translate(0, -1 * radius);
                    
                    var char = str[n];

                    context.fillText(char, 0, 0);
                    context.fillStyle = `color`;
                    context.restore();
                }
                context.restore();
            },

            createMarkArc(canvasEl, marksCtx, categories, radius, startX, startY, total, startAngle) {
                var counter = 0;
                var gradeSystem = 10;
                var color = '';
                var markRadius = radius;
                 
                //store the position of each label which is calculated when the graph is drawn
                var labelxy = [];
                var fontSize = Math.floor(marksCtx.height / 33);
                    marksCtx.textAlign = 'center';
                    canvasEl.textBaseline = 'bottom';
                    marksCtx.font = fontSize * 2 + "px Arial";
                

                while (counter < gradeSystem) {
                    var lradius = markRadius - 15;
                    // обьявляются ли эти переменные с каждой итерацией или сущестуют в скоупе фу
                    var lastEnd = startAngle;
                    var thisCategoryPercentage = total / categories.length; 

                    canvasEl.beginPath();
                    canvasEl.fillStyle = `rgba(0,0,0, 0.1)`;
                    //canvasEl.fillStyle = `red`;

                    // какие координаты у линии проведенной до десятой части радиуса
                    canvasEl.moveTo(startX, startY);
                    
                    var arcSector = Math.PI * 2 * thisCategoryPercentage / total; 
                    var startAngle = lastEnd;
                    var endAngle = lastEnd + arcSector;
                    
                    canvasEl.arc(startX, startY, markRadius, startAngle, endAngle, false);
                    canvasEl.lineTo(startX, startY);

                    canvasEl.fill();
                    canvasEl.closePath();
                    lastEnd += arcSector;

                    var labelxy = [];
                    var langle = lastEnd + arcSector / 2 + Math.PI;
                    var dx = startX + lradius * Math.cos(langle);
                    var dy = startY + lradius * Math.sin(langle);

                     labelxy.push({langle: langle, dx: dx, dy: dy, counter: counter});
                     marksCtx.fillText(gradeSystem - counter, dx, dy);
                    
                    markRadius -= radius / gradeSystem;
                    counter++
                }
            }
        },
        mounted() {
            //  const wheelCanvas = document.getElementById("wheel");
            //  const wheelCtx = wheelCanvas.getContext('2d');
            
            //  this.createWheel(wheelCtx, wheelCanvas.width, wheelCanvas.height, this.categories)

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