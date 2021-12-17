
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
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
          }
        ]
    })
    
  })