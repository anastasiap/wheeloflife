var domtoimage = require('dom-to-image');
var headingSpans = $('.headings li span');


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

$(function(){
    var defaultCircle = $('[data-type="default"]'),
        homePage = (!defaultCircle.hasClass('hidden')) ? true : false,
        defaultCategories = $('li.default'),
        customCategoriesInputContainer = $('.form-group.label-floating'),
        circles = $('.circle-wrapper'),
        field = '<div class="form-group label-floating">' +
                    '<label class="control-label">Field name</label>' +
                    '<input type="text" class="form-control">' +
                '</div>',
        createCustomCircleBtn = $('[data-type="create-custom-circle"]'),
        errorContainer = $('.alert'),
        selectNumberCategoriesForm = $('[data-type="create-circle"]'),
        circleMarks = $('.circle-wrapper li span'),
        categoriesGraph = $('[data-type="section-names"]'),
        selectAmount = $('#section-amt'),
        modalForm = $('#area-number');

    $('.date').html(currentDate());

    createCustomCircleBtn.on('click', function(){
        errorContainer.addClass('hidden');

        circles.each(function(i) {
            var circle = $(this);

            if (!circle.hasClass('hidden')) {
                circle.addClass('hidden');
                defaultCategories.addClass('hidden');
            }

            if (circle.data('type') != 'default') {
                circle.find('.headings li h5').text('');
            }
        });

        circleMarks.css({
            'background-color': 'transparent'
        }).find('a').css('color', '#000');

        selectNumberCategoriesForm.removeClass('hidden');
        categoriesGraph.addClass('hidden');
        selectAmount.val(0);
        defaultCategories.addClass('hidden');
        $('.form-group.label-floating').remove();
        $('.custom-categories').remove();
    });


    selectAmount.on('change', function(){
        var numberOfCategories = $(this).val();

        homePage = false;
        categoriesGraph.append(field.repeat(numberOfCategories)).removeClass('hidden');
        errorContainer.addClass('hidden');
        circles.addClass('hidden');
        $('[data-type="'+ numberOfCategories +'"]').removeClass('hidden');

        modalForm.modal('toggle');
        modalForm.on('hidden.bs.modal', function(){
            selectAmount.val($('#section-amt option:first').val());
        });

        $('[data-type="section-names"] input').on('keydown', function(){
            errorContainer.addClass('hidden');
        });

        $('[data-type="section-names"] input').on('keyup', function(e){
            var index = $(this).parent('div').index() - 2,
                sectionName = $(this).val();

            var circleSection = $('[data-type="'+ numberOfCategories +'"]').find('.headings li').get(index);

            $(circleSection).find('h5').html(sectionName);
        });

        $('[data-type="section-names"] input').on('focusout', function(e){
            var input = $(this),
                sectionName = input.val();

            if (sectionName) {
                var li = '<li class="custom-categories">' +
                            '<span class="area-name">' +
                            sectionName +
                            '</span> <span class="mark ">0</span>' +
                            '<div class="progress">' +
                                '<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>' +
                                '</div>' +
                        '</li>';

                input.parents('[data-type="section-names"]').find('.marks-list').append(li);
                input.parents('div').find('ul.marks-list').show();
                input.parent().hide();
            }
        });
    });

    $('.circle-wrapper li span').on('click', function(e){
        e.preventDefault();

        var clickedSpan = $(this),
            mark = clickedSpan.find('a').text(),
            markArray = clickedSpan.parent().find('span'),
            selected = markArray.splice(markArray.length - mark),
            index = clickedSpan.parents('li').index(),
            allSpans = clickedSpan.parents('li').find('span'),
            categoryContainer = clickedSpan.parents('.circle-wrapper').find('.headings li').get(index),
            categoryName = $(categoryContainer).find('h5').text().trim(),
            title = $('.marks-list li .area-name');

        allSpans.css('background-color', 'transparent');

        if (homePage || $('[data-type="section-names"] .form-group').length == $('.custom-categories').length) {
            var color = $(this).parents('li').css('background-color');

            errorContainer.addClass('hidden');
            $(selected).css('background', 'rgba(0,0,0, 0.60)');

            allSpans.find('a').css('color', '#000');
            $(selected[0]).find('a').css('color', '#fff');

            title.filter(function() {
                return $(this).text().trim() === categoryName;
            }).siblings('.mark').html(mark).css('background-color', color);

            title.filter(function() {
                return $(this).text().trim() === categoryName;
            }).siblings('.progress').find('.progress-bar').css('background-color', color).css('width', mark + '0%');

            title.filter(function() {
                return $(this).text().trim() === categoryName;
            }).siblings('.mark').css('background-color', color);
        } else {
            clickedSpan.prop('disabled', true);
            errorContainer.removeClass('hidden');

            $('html, body').animate({
                scrollTop: errorContainer.offset().top
            }, 500);
        }
    });

    $('[data-type="jpg-btn"]').on('click', function(){
        domtoimage.toJpeg(document.getElementById('default-wheel-container'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = currentDate() + 'WheelOfLife.jpeg';
                link.href = dataUrl;
                link.click();
            });
    });

    $('[data-type="show-default"]').on('click', function(){
        homePage = true;
        errorContainer.addClass('hidden');
        circles.addClass('hidden');
        defaultCircle.removeClass('hidden');
        defaultCategories.removeClass('hidden');
        $('.form-group.label-floating').remove();
        $('.circle-wrapper li span').css('background-color', 'transparent').find('a').css('color', '#000');
        $('.default .mark').attr('style', '');
        $('.marks-list .mark').html('0').prop('class', 'mark');
        $('.progress-bar').css('width', '0');
    });
});
