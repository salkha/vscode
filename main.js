jQuery(function ($) {
    $('#upsell-product-table-dy').slick({
        centerMode: true,
        centerPadding: '30px',
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        draggable: true,
        swipe: true,
        swipeToSlide: false,
        touchMove: true

    });
});

$$('#findSpecialPrice').each(function(el) {
if(el.innerHTML.length > 0) {
el.up().up().show();
el.up().up().previous().hide();
}
});