$(document).ready(function(){
     // Customer Logo Carousel
  $('.customer-logos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 950,
        settings: {
          slidesToShow: 2
        }
    },{
      breakpoint: 750,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});