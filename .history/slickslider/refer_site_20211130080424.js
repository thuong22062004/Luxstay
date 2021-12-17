$(document).ready(function(){
    $('.refer__site-click').slick({
      pauseOnHover:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        draggable:true,
        autoplay: false,
        // autoplaySpeed: 2000,
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