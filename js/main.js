$(function () {

    $('.top__slider').slick({

        autoplay: true,
        fade: true,
        arrows: false,
        dots: false
    });

    $('.feedback__slider').slick({

        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1

    });

});



$(function () {  
    $('.new__table-item a').each(function () { 
        var location = window.location.href; 
        var link = this.href;  
        if(location == link) { 
            $(this).addClass('active');
        }
    });
});


$(function () {  
    $('.new__table-link').each(function () { 
        var location = window.location.href; 
        var link = this.href;  
        if(location == link) { 
            $(this).addClass('active');
        }
    });
});