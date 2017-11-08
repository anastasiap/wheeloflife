/* TODO move plugin in to app dependencies */

var domtoimage = require('dom-to-image');

$('[data-type="jpg-btn"]').on('click', function(){
  domtoimage.toJpeg(document.getElementById('custom-wheel-container'), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = currentDate() + 'WheelOfLife.jpeg';
      link.href = dataUrl;
      link.click();
    });
});

function currentDate() {
  var today = new Date(),
    dd = today.getDate(),
    mm = today.getMonth()+1,
    yyyy = today.getFullYear();

  if(dd < 10) { dd = '0'+dd }
  if(mm < 10) { mm = '0'+mm }
  today = dd + '.' + mm + '.' + yyyy;

  return today;
};
