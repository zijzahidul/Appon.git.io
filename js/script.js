$(function () {

    // Slider
    $('.responsive').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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

    // Images_Slider
    $('.screenshot_slide').slick({
        centerMode: true,
        slidesToShow: 5,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 3
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 1
                }
    }
    ]
    });

    // Venobox
    $('.venobox').venobox();



    // Menufix
    var navoff = $("header").offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $("header").addClass("menu_fix");
        } else {
            $("header").removeClass("menu_fix");
        }
    });


    // Scroll To Top  
    $(".bto").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 130) {
            $(".bto").fadeIn();
        } else {
            $(".bto").fadeOut();
        }
    });


    // Feedback
    // Slider
    $('.text_slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,

        arrows: false,
        asNavFor: '.client_slider',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
      },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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

    // Slider
    $('.client_slider').slick({
        infinite: false,
        speed: 300,
        asNavFor: '.text_slider',
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
      },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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




});
