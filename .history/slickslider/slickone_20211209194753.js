
$(document).ready(function(){
    $('.grid .row.slider__slick-site').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        draggable:true,
        mobileFirst:true,//add this one
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='ti-angle-right'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
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