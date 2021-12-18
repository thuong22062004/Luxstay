$(document).ready(function(){
    $('.refer__site-click').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        draggable:true,
        autoplay: false,
        // autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left slick__arrow-refer'><i class='ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick__arrow-refer'><i class='ti-angle-right'></i></button>",
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                arrows: false,
        infinite: false,
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1.2,
                  // slidesToScroll: 1,
                infinite: false,
                  dots: false,
                  arrows:false
                }
              },
        ]
    })
    
  })