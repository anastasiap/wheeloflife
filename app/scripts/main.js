var domtoimage = require('dom-to-image');
var headingSpans = $('.headings li span');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = dd + '.' + mm + '.' + yyyy;

$('.date').html(today);

$('li span').on('click', function(e){
    e.preventDefault();

    var mark = $(this).find('a').text(),
        markArray = $(this).parent().find('span'),
        selected = markArray.splice(markArray.length - mark),
        index = $(this).parents('li').index(),
        allSpans = $(this).parents('li').find('span');

    allSpans.css({
        'background-color': 'transparent'
    });

    //disable click if headings are epmty
    if ($('[data-type="section-names"] .form-group').length == $('.custom-marks-list li').length) {
        
        $('.alert').addClass('hidden');
        $(selected).css({
           'background': 'rgba(0,0,0, 0.50)'
        });

        allSpans.find('a').css('color', '#000');
        $(selected[0]).find('a').css('color', '#fff');


        if($(this).parents('ul').hasClass('circle')) {
            $('.marks-list li').eq(index).find('.mark').html(mark);
            $('.marks-list li').eq(index).find('.progress-bar').css('width', mark + '0%');
        } else {
            $('.custom-marks-list li').eq(index).find('.mark').html(mark);
        }
    } else {
       $(this).prop('disabled', true);
       $('.alert').removeClass('hidden');
    }
});

$('[data-type="jpg-btn"]').on('click', function(){
    domtoimage.toJpeg(document.getElementById('default-wheel-container'), { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = today + 'wheeloflife.jpeg';
            link.href = dataUrl;
            link.click();
        });    
});

var circles = $('.circle-wrapper'),
    field = '<div class="form-group label-floating">' + 
                '<label class="control-label">Field name</label>' + 
                '<input type="text" id="" class="form-control">' +
            '</div>';

$('[data-type="create-custom-circle"]').on('click', function(){
    circles.each(function(i) {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
        }

        if ($(this).data('type') != 'default') {
            $(this).find('.headings li h5').text('');
        }    
    });

    $('[data-type="0"]').removeClass('hidden');             
    
    $('li span').css({
        'background-color': 'transparent'
    }).find('a').css('color', '#000');
    $('[data-type="create-circle"]').removeClass('hidden');
    $('[data-type="section-names"]').addClass('hidden');
    $('.section-marks').hide();
    $('#section-amt').val(0);   
    $('.custom-marks-list').html();  
    $('[data-type="section-names"] .form-group').remove();  
    $('.custom-marks-list li').remove();  
});

//set all default states
$('[data-type="show-default"]').on('click', function(){
    circles.addClass('hidden');
    $('[data-type="default"]').removeClass('hidden');    
    
    $('[data-type="section-names"]').addClass('hidden');
    $('.section-marks').show();
    $('li span').css({
        'background-color': 'transparent'
    }).find('a').css('color', '#000');
    $('.marks-list .mark').html('0');
    $('.progress-bar').css('width', '0')
});

$('#section-amt').on('change', function(){
    var sectionAmt = $(this).val();
 
    $('[data-type="section-names"]').append(field.repeat(sectionAmt)).removeClass('hidden'); 
    circles.addClass('hidden');    
    $('[data-type="'+ sectionAmt +'"]').removeClass('hidden');
    
    $('.section-marks').hide();

    $('#area-number').modal('toggle');

    $('[data-type="section-names"] input').on('keydown', function(){
        $('.alert.alert-danger').addClass('hidden');
    });

    $('[data-type="section-names"] input').on('keyup', function(e){
        var index = $(this).parent('div').index() - 2,
            sectionName = $(this).val();

        var circleSection = $('[data-type="'+ sectionAmt +'"]').find('.headings li').get(index);

        $(circleSection).find('h5').html(sectionName);
    });

    $('[data-type="section-names"] input').on('focusout', function(e){
        var sectionName = $(this).val();

        if (sectionName) {
            var li = '<li>' + 
                        '<span class="area-name">' + 
                        sectionName + 
                        '</span> <span class="mark">0</span>' +
                        '<div class="progress">' +
                            '<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>' +
                            '</div>' + 
                    '</li>';
            $(this).parents('div').siblings('ul').append(li);
            $(this).parent().hide();
        }
    });
});

