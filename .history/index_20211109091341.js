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
   const posittionX = 0;
  // console.log(sliderlength)
  nextBtn.addEventListener('click',function(){
          HandleChange(1)
  })
  backBtn.addEventListener('click',function(){
    HandleChange(-1)
  })
  function HandleChange (direction){
    if(direction == 1){
      posittionX -= sliderWidth
      console.log(posittionX)
    }
   else if(direction == -1){
      console.log('back')
    }
  }
})