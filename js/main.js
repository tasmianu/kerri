$(window).scroll(function(event){
  if($(document).scrollTop() < 1){
    $('.header').removeClass('fixed');
    $('.header').removeClass('active');
  } else if($(document).scrollTop() > 100){
    $('.header').removeClass('fixed');
    $('.header').addClass('active');
  } else{
    $('.header').addClass('fixed');
  }
});

$(function(){

    var typed = new Typed('.type', {
        strings: [
            'Tasmia Alam.',
            'web designer.',
            'freelancer.',
            ],
        typeSpeed: 70,
        backSpeed: 80,
        loop:true
      });
      $('.sliderDiv').slick({
        dots: true,
        arrows:false,
        infinite: true,
        autoplay:true,
        autoplayspeed:500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    
      var $grid = $('.gellaryControl-a').isotope({
        // options
      });
     
      $('.f-gallery').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 0
                }, 800);
                return false;
            }
        }
    });
    $('.magni').magnificPopup({
      type:'image',
      gallery:{
        enabled:true
      }
      
    });
});