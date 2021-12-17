$(document).ready(function(){
    $('.payment-slick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        draggable:true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='ti-angle-right'></i></button>",
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: false,
                dots: false,
                arrows: true,
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows:false
                }
              },
        ]
    })
    
  })