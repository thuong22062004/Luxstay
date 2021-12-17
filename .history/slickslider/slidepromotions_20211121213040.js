$(document).ready(function(){
    $('.slick__slider-sales').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        draggable:true,
        prevArrow:"<button type='button' class='slick-prev pull-left slick__arrow-sales'><i class='ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick__arrow-sales'><i class='ti-angle-right'></i></button>",
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
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