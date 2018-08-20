$(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
      $("#tnavbar").addClass("newClass");
    } else {
      $("#tnavbar").removeClass("newClass");
    } 
  });
 
$(document).ready(function(){
    dyscrollup.init({
        showafter: 60,
        scrolldelay: 800,
        position: 'right',
        image: 'image/48-black.png',
        shape: '',
        width: 40,
        height: 40
    });
    $('.top-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        autoplay: true,

    })
    $('.package-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 3,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            770: {
                items: 2,
                nav: false,
                loop: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }

    })
    $('.country-trekking-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav : true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        items: 4,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            770: {
                items: 2,
                nav: false,
                loop: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }

    })
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            770: {
                items: 1,
                nav: false,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }

    })

});

new WOW().init();