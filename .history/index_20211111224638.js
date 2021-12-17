window.addEventListener('load',function(){
  const $ = document.querySelector.bind(document)
  const $$ =  document.querySelectorAll.bind(document);
  const slider = $('.slider');
  const mainslider = $('.contain-img');
  const nextBtn = $('.slider__next');
  const backBtn = $('.slider__back');
  const itemdots = $$('.item-dot');
  const sliderimgs = $$('.img-item');
  const sliderWidth = sliderimgs[0].offsetWidth;
  const sliderlength = sliderimgs.length 
  var  posittionX = 0;
   var index = 0;
  // console.log(sliderlength)
  nextBtn.addEventListener('click',function(){
          HandleChange(1)
  })
  backBtn.addEventListener('click',function(){
    HandleChange(-1)
  });
  [...itemdots].forEach(item => 
    item.addEventListener('click',function(e){
    [...itemdots].forEach((removes) => removes.classList.remove('active'));
      e.target.classList.add('active');
      const SlideIndex = parseInt(e.target.dataset.index) ;
      index = SlideIndex;
      posittionX = -1 * index * sliderWidth
      mainslider.style =`transform:translateX(${posittionX}px)`;
      console.log(index)
    })
  );
  function HandleChange (direction){
    if(direction == 1){
      if(index >= sliderlength -1 ){
        index = 0;
      posittionX = 0 * index * sliderWidth
      }
      posittionX = posittionX - sliderWidth
      if(posittionX == posittionX - sliderWidth){

      }
      mainslider.style =`transform:translateX(${posittionX}px)`;
      index++;
      console.log(index)
    }
   else if(direction == -1){
     if(index <= 0){
       index = 0
       return
      }
      console.log(index)
      posittionX = posittionX + sliderWidth
      mainslider.style =`transform:translateX(${posittionX}px)`;
      index-- ;
    }
    [...itemdots].forEach((removes) => removes.classList.remove('active'));
    itemdots[index].classList.add('active')
  }
})