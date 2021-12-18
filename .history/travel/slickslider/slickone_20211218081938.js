
$(document).ready(function(){
    $('.slider__slick-site').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        draggable:true,
        // rtl: true,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='ti-angle-right'></i></button>",
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                arrows:true
              }
            },
            {
                breakpoint: 480,
                settings: {
                  infinite: true,
                  speed: 300,
                  slidesToShow: 3,
                  centerMode: true,
                  variableWidth: true,
                  dots: false,
                  arrows:false,
                }
              },
        ]
    })
    
  })