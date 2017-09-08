var domtoimage = require('dom-to-image');

$('li span').on('click', function(){
    var mark = $(this).find('a').text(),
        markArray = $(this).parent().find('span'),
        selected = markArray.splice(markArray.length - mark),
        index = $(this).parents('li').index(),
        allSpans = $(this).parents('li').find('span');

    allSpans.css({
        'background-color': 'transparent'
    });

    $(selected).css({
       'background': 'rgba(0,0,0, 0.50)'
    });

    allSpans.find('a').css('color', '#000');
    $(selected[0]).find('a').css('color', '#fff');

    $('.marks-list li').eq(index).find('.mark').html(mark);
});


$('[data-type="jpg-btn"]').on('click', function(){
    domtoimage.toJpeg(document.getElementById('default-wheel-container'), { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
        });    
});
