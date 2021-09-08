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

$(function () {  
  $('.menu__link').each(function () { 
      var location2 = window.location.href; 
      var link2 = this.href;  
      if(location2 == link2) { 
          $(this).addClass('active-1');
      }
  });
});







// $('.menu-btn').on('click', function(e) {
//     e.preventDefault;
//     $(this).toggleClass('menu-btn_active');
//   });




  

// АККОРДЕОН

  let acc = document.getElementsByClassName("accordion");
  let i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }