$(document).ready(function(){
  $('.slick-kaelinn').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
      ]
  });
});
