var domtoimage = require('dom-to-image');
var headingSpans = $('.headings li span');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();



$(function(){
var homePage = false;

    if (!$('[data-type="default"]').hasClass('hidden')) {
        homePage = true;
    }

    var defaultCategories = $('li.default');
    var circles = $('.circle-wrapper'),
    field = '<div class="form-group label-floating">' + 
                '<label class="control-label">Field name</label>' + 
                '<input type="text" class="form-control">' +
            '</div>';


if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = dd + '.' + mm + '.' + yyyy;

$('.date').html(today);

$('[data-type="create-custom-circle"]').on('click', function(){
    circles.each(function(i) {
        if (!$(this).hasClass('hidden')) {
            $(this).addClass('hidden');
            defaultCategories.addClass('hidden');
        }

        if ($(this).data('type') != 'default') {
            $(this).find('.headings li h5').text('');
        }    
    });

    $('[data-type="0"]').removeClass('hidden');             
    
    $('.circle-wrapper li span').css({
        'background-color': 'transparent'
    }).find('a').css('color', '#000');
    $('[data-type="create-circle"]').removeClass('hidden');
    $('[data-type="section-names"]').addClass('hidden');
    $('.section-marks').hide();
    $('#section-amt').val(0);   
    $('.marks-list .default').addClass('hidden');  
    $('.marks-list .form-group.label-floating').remove();  
      
    $('[data-type="section-names"] .form-group.label-floating').remove();  
    //$('.marks-list li').remove();  
});


$('#section-amt').on('change', function(){
    var sectionAmt = $(this).val();

    homePage = false;
 
    $('[data-type="section-names"]').append(field.repeat(sectionAmt)).removeClass('hidden'); 
    circles.addClass('hidden');    
    $('[data-type="'+ sectionAmt +'"]').removeClass('hidden');


    $('#area-number').modal('toggle');
    $('#area-number').on('hidden.bs.modal', function(){
        $('#section-amt').val($("#section-amt option:first").val());
    });

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
            var li = '<li class="custom-categories">' + 
                        '<span class="area-name">' + 
                        sectionName + 
                        '</span> <span class="mark ">0</span>' +
                        '<div class="progress">' +
                            '<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>' +
                            '</div>' + 
                    '</li>';
            
            $(this).parents('[data-type="section-names"]').find('.marks-list').append(li);
            $(this).parents('div').find('ul.marks-list').show();
            $(this).parent().hide();
        }
    });
});

$('.circle-wrapper li span').on('click', function(e){
    e.preventDefault();

    var mark = $(this).find('a').text(),
        markArray = $(this).parent().find('span'),
        selected = markArray.splice(markArray.length - mark),
        index = $(this).parents('li').index(),
        allSpans = $(this).parents('li').find('span'),
        categoryContainer = $(this).parents('.circle-wrapper').find('.headings li').get(index),
        categoryName = $(categoryContainer).find('h5').text();

        console.log(categoryName);

    allSpans.css({
        'background-color': 'transparent'
    });

    if (homePage || $('[data-type="section-names"] .form-group').length == $('.custom-categories').length) {
        var color = $(this).parents('li').attr('class');
        $('.alert').addClass('hidden');
        $(selected).css({
           'background': 'rgba(0,0,0, 0.50)'
        });

        allSpans.find('a').css('color', '#000');
        $(selected[0]).find('a').css('color', '#fff');

        $('.marks-list li span:contains('+ categoryName +')').siblings('.mark').html(mark).addClass(color);
        $('.marks-list li span:contains('+ categoryName +')').siblings('.progress').find('.progress-bar').addClass(color).css('width', mark + '0%');
        $('.marks-list li span:contains('+ categoryName +')').siblings('.mark').addClass(color);
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


    //set all default states
    $('[data-type="show-default"]').on('click', function(){
        circles.addClass('hidden');
        homePage = true;
        $('[data-type="default"]').removeClass('hidden');    
        
        //$('[data-type="section-names"]').addClass('hidden');
        //$('.section-marks').show();
        $('.circle-wrapper li span').css({
            'background-color': 'transparent'
        }).find('a').css('color', '#000');
        
        $('.marks-list .custom-categories').remove();
        defaultCategories.removeClass('hidden');
        $('.marks-list .mark').html('0').prop('class', 'mark');
        //$('.marks-list .default').removeClass('hidden');
        $('.progress-bar').css('width', '0');
    });
});
