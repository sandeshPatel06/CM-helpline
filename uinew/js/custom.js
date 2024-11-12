$(document).ready(function () {
    let url = window.location.href;
    $('.navbar-nav .nav-item .nav-link').each(function () {
        if (this.href === url) {
            $(this).closest('li a').removeClass('active');
            $(this).closest('li a').addClass('active');
        }
    })

    //$(window).load(function () {
    //    $(".services_active").addClass("active");
    //});

    /*Scroll to top when arrow up clicked BEGIN*/
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });

    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(window).scroll(function () {
        if ($(document).width() > 768) {
            if ($(this).scrollTop() > 100) {
                $('header').addClass('header_fixed');
            }
            else {
                $('header').removeClass('header_fixed');
            }
        }
        else {
            ($(document).width() < 768)
            if ($(this).scrollTop() > 100) {
                $('nav').addClass('header_fixed');
            }
            else {
                $('nav').removeClass('header_fixed');
            }
        }
    });

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('[data-toggle="tooltip"]').tooltip();
    
    //$('.new-information-ticker').easyTicker({
    //    speed: 'medium'
    //});

    $('.dropdown-toggle').click(function (e) {
        if ($(document).width() > 768) {
            e.preventDefault();

            var url = $(this).attr('href');


            if (url !== '#') {

                window.location.href = url;
            }

        }
    });

    $(".Modern-Slider").slick({
      autoplay:true,
      autoplaySpeed:10000,
      speed:600,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      dots:true,
      pauseOnDotsHover:true,
      cssEase:'linear',
      fade:true,
      draggable:false,
      prevArrow:'<a type="button" class="PrevArrow"></a>',
        nextArrow:'<a type="button" class="NextArrow"></a>',
    });
    $(".Modern-Slider").mouseenter(function () {
        $(".slick-arrow").show();
    });
    $(".Modern-Slider").mouseleave(function () {
        $(".slick-arrow").hide();
    });

    $('.schemes').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        autoWidth: false,
        autoHeight: false,
        margin: 40,
        dots: false,
        navSpeed: 700,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            576: {
                items: 2,
                margin: 15
            },
            851: {
                items: 3
            },
            1140: {
                items: 3,

            },
            1400: {
                items: 3,
                loop: false,

            }
        },
        nav: true
    })
    $('.portals').owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        autoWidth: false,
        autoHeight: false,
        margin: 20,
        dots: false,
        navSpeed: 700,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 2
            },
            740: {
                items: 4
            },
            940: {
                items: 5
            }
        },
        nav: true
    })
   
    $('.resolution_slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        autoWidth: false,
        autoHeight: false,
        dots: true,
        margin: 24,
        navSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            740: {
                items: 1
            },
            940: {
                items: 1
            }
        },
        nav: true
    })
 

  });

 
 
