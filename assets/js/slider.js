var $theFlexS = jQuery.noConflict();

jQuery(document).ready(function($){

    jQuery('#the_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="left-arrow"><i class="bi bi-arrow-left"></i></span>',
        nextArrow: '<span class="right-arrow"><i class="bi bi-arrow-right"></i></span>'
    });

});