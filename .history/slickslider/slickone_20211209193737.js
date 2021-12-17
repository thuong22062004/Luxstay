
$(document).ready(function(){
    $('.grid .row.slider__slick-site').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        draggable:true,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='ti-angle-right'></i></button>",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1008,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 800,
            settings: 'unslick',
          },
        ]
    })
    
  })