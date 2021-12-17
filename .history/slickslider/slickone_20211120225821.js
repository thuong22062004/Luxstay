
$(document).ready(function(){
    $('.row.slider__slick-site').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        draggable:true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    })
    
  })