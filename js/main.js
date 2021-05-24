$(function(){
 $('.carousel__inner').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 841,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
 });
});