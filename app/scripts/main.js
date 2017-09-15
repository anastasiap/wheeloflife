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

    if($(this).parent('ul').hasClass('circle')) {
        $('.marks-list li').eq(index).find('.mark').html(mark);
    } else {
        $('.custom-marks-list li').eq(index).find('.mark').html(mark);
    }
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

var circles = $('.circle-wrapper'),
    field = '<div class="form-group">' + 
                '<input type="text" id="image" class="form-control" aria-describedby="Image" placeholder="Field name">' +
            '</div>';

$('[data-type="show-block"]').on('click', function(){
    circles.each(function(i) {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }
        $('.headings li h5').text('');
        $('[data-type="0"]').removeClass('hidden');    
    });
    
    $('[data-type="create-circle"]').removeClass('hidden');
    $('[data-type="section-names"]').addClass('hidden');
    $('.section-marks').hide();
    $('#section-amt').val(0);   
    $('.custom-marks-list').html('');  
});

$('[data-type="show-default"]').on('click', function(){
    circles.addClass('hidden');
   $('[data-type="default"]').removeClass('hidden');    
    $('[data-type="create-circle"]').addClass('hidden');
    $('[data-type="section-names"]').addClass('hidden');
    $('.section-marks').show();
});

$('#section-amt').on('change', function(){
    var sectionAmt = $(this).val();
  
    $('[data-type="section-names"]').append(field.repeat(sectionAmt)).removeClass('hidden'); 
    circles.addClass('hidden');    
    $('[data-type="'+ sectionAmt +'"]').removeClass('hidden');
    $('[data-type="create-circle"]').addClass('hidden');

    $('[data-type="section-names"] input').on('keyup', function(e){
        var index = $(this).parent('div').index() - 1,
            sectionName = $(this).val();

        var circleSection = $('[data-type="'+ sectionAmt +'"]').find('.headings li').get(index);

        console.log($(circleSection).find('h5'))

        $(circleSection).find('h5').html(sectionName);

    });

    $('[data-type="section-names"] input').on('focusout', function(e){
        var sectionName = $(this).val();

        if (sectionName) {
            var li = '<li><span class="area-name">'+ sectionName +' </span> — <span class="mark">0</span></li>';
            
            $(this).parents('div').siblings('ul').append(li);

            $(this).hide();
        }
        
        
    });
});

