$(document).ready(function () {
  $('.customer__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    dots: true,
    adaptiveHeight: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
});
