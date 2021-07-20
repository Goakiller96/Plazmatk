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








$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
  });




  

// АККОРДЕОН

  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }