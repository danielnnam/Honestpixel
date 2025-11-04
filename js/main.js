/* Edges Theme Scripts */

(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('body').addClass('loaded');
    });


    /*=========================================================================
    	Sticky Header
    =========================================================================*/
    $(function () {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 80;
        $(window).on('scroll', function () {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.addClass("navbar-fixed-top");
            } else {
                header.removeClass("navbar-fixed-top");
            }

            // ScrollToTop
            if ($(this).scrollTop() > 100) {
                $('#scroll-to-top').fadeIn();
            } else {
                $('#scroll-to-top').fadeOut();
            }

        });
    });

    /*=========================================================================
            Mobile Menu
    =========================================================================*/
// Header scroll behavior
const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerBars = menuToggle.querySelectorAll('span'); // select the 3 lines

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('header-active', 'bg-white', 'shadow-md');
    header.classList.remove('bg-transparent');

    // Turn hamburger bars black
    hamburgerBars.forEach(bar => {
      bar.classList.add('bg-black');
      bar.classList.remove('bg-white');
    });
  } else {
    header.classList.remove('header-active', 'bg-white', 'shadow-md');
    header.classList.add('bg-transparent');

    // Turn hamburger bars white again
    hamburgerBars.forEach(bar => {
      bar.classList.add('bg-white');
      bar.classList.remove('bg-black');
    });
  }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

    /*=========================================================================
        Nivo slider 
    =========================================================================*/
    $('#main-slider').nivoSlider({
        effect: 'fade',
        animSpeed: 300,
        pauseTime: 5000,
        directionNav: true,
        manualAdvance: false,
        controlNavThumbs: false,
        pauseOnHover: true,
        controlNav: false,
        prevText: "<i class='arrow_left'></i>",
        nextText: "<i class='arrow_right'></i>"
    });

    /*=========================================================================
    	Isotope Masonry
    =========================================================================*/
    $('.portfolio-masonry').imagesLoaded(function () {

        // Add isotope click function
        $('.filter-menu li').on('click', function () {
            $(".filter-menu li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".portfolio-masonry").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

        $(".portfolio-masonry").isotope({
            itemSelector: '.single-item',
            layoutMode: 'masonry',
        });
    });

    /*=========================================================================
        Testimonial Carousel
    =========================================================================*/
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 25,
        autoplay: true,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            }
        }
    });

    /*=========================================================================
    	Initialize smoothscroll plugin
    =========================================================================*/
    smoothScroll.init({
        offset: 60
    });

    /*=========================================================================
    	CurrentYear
    =========================================================================*/
    var currentYear = new Date().getFullYear();
    $('#currentYear').append(currentYear);

    /*=========================================================================
    	WOW Active
    =========================================================================*/
    new WOW().init();

    /*=========================================================================
        Swipebox
    =========================================================================*/
    $('.lightbox').swipebox();

})(jQuery);
