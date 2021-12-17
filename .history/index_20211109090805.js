window.addEventListener('load',function(){
  const $ = document.querySelector.bind(document)
  const $$ =  document.querySelectorAll.bind(document);
  const slider = $('.slider');
  const mainslider = $('contain-img');
  const nextBtn = $('.slider__next');
  const backBtn = $('.slider__back');
  const itemdots = $$('item-dot');
  const sliderimgs = $$('.img-item');
  const sliderWidth = sliderimgs[0].offsetWidth;
  const sliderlength = sliderimgs.length 
  // console.log(sliderlength)

})