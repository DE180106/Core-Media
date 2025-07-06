(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.fixed-top .container').addClass('shadow-sm').css('max-width', '100%');
        } else {
            $('.fixed-top .container').removeClass('shadow-sm').css('max-width', '85%');
        }
    });

    // Donation
    $('.progress').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    // Event carousel with uniform height
    $(".event-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            768: { items: 1 },
            992: { items: 2 },
            1200: { items: 3 }
        },
        onInitialized: function () {
            var maxHeight = 0;
            $('.event-carousel .event-item').each(function () {
                $(this).css('height', 'auto');
                var thisHeight = $(this).height();
                maxHeight = Math.max(maxHeight, thisHeight);
            });
            $('.event-carousel .event-item').height(maxHeight);
        }
    });

    // Smooth scroll for navbar and back-to-top
    $(document).ready(function () {
        // Preload scroll positions
        var sectionOffsets = {};
        $('.navbar .nav-link, .back-to-top').each(function () {
            var href = $(this).attr('href');
            if (href.startsWith('#')) {
                var target = $(href);
                if (target.length) {
                    sectionOffsets[href] = target.offset().top - 80;
                }
            }
        });

        // Smooth scroll
        $('.navbar .nav-link, .back-to-top').click(function (e) {
            var href = $(this).attr('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                var targetOffset = sectionOffsets[href];
                if (targetOffset !== undefined) {
                    $('html, body').stop().animate({
                        scrollTop: targetOffset
                    }, {
                        duration: 800,
                        easing: 'easeInOutCubic'
                    });
                }
            }
        });
    });

    // Back to top button visibility
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // Animation on scroll
    document.addEventListener("DOMContentLoaded", function () {
        function checkInView() {
            const elements = document.querySelectorAll('.animate-slide-in');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight) {
                    element.classList.add('in-view');
                }
            });
        }
        window.addEventListener('scroll', checkInView);
        checkInView();
    });

})(jQuery);