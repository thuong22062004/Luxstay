window.addEventListener('load',function(){
  const $ = document.querySelector.bind(document)
  const $$ =  document.querySelectorAll.bind(document);
  const slider = $('.slider');
  const mainslider = $('contain-img');
  const next = $('.slider__next');
  const back = $('.slider__back');
  const itemdots = $$('item-dot');
  const sliderimgs = $$('.img-item');
  const sliderWidth = sliderimgs[0].offsetWidth;
})