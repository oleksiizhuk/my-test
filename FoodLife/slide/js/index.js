$(function () {
    //$(".owl-carousel").owlCarousel();
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 10000
        //autoplayHoverPause: true
    });
});