(() => {
  const root = document.querySelector('.carousel-page main');
  if (!root) return;
  if (typeof Swiper === 'undefined') { root.querySelector('.carousel-error').hidden=false; return; }
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'), instances=[];
  root.querySelectorAll('.demo-swiper').forEach(element=>{
    const type=element.dataset.variant, card=element.closest('section');
    const options={speed:reduced.matches?0:300,loop:false,autoplay:false,watchSlidesProgress:true,keyboard:false,a11y:{enabled:true},navigation:{addIcons:false}};
    const prev=element.querySelector('.swiper-button-prev'),next=element.querySelector('.swiper-button-next');
    if(prev) options.navigation={prevEl:prev,nextEl:next,addIcons:false};
    const pagination=element.querySelector('.swiper-pagination');
    if(pagination) options.pagination={el:pagination,clickable:true,type:type==='progress'?'progressbar':'bullets'};
    if(type==='scrollbar') options.scrollbar={el:element.querySelector('.swiper-scrollbar'),draggable:true,hide:true};
    if(type==='vertical') options.direction='vertical';
    if(type==='multiple') Object.assign(options,{slidesPerView:2,spaceBetween:20,breakpoints:{576:{slidesPerView:3,spaceBetween:30}}});
    if(type==='coverflow') Object.assign(options,{effect:'coverflow',centeredSlides:true,slidesPerView:'auto',coverflowEffect:{rotate:50,depth:100,stretch:0,modifier:1,slideShadows:true}});
    if(type==='cube') options.effect='cube';
    if(type==='flip') options.effect='flip';
    let thumbs;
    if(type==='gallery') {
      thumbs=new Swiper(card.querySelector('.gallery-thumbs'),{slidesPerView:4,spaceBetween:10,freeMode:true,watchSlidesProgress:true,speed:reduced.matches?0:300,a11y:{enabled:true}});
      options.thumbs={swiper:thumbs}; instances.push(thumbs);
    }
    const instance=new Swiper(element,options); instances.push(instance);
    const update=()=>{
      card.querySelector('.slide-status').textContent=`Slide ${instance.activeIndex+1} of 5`;
      card.querySelector('[data-step="-1"]').disabled=instance.isBeginning;
      card.querySelector('[data-step="1"]').disabled=instance.isEnd;
      if(thumbs) thumbs.slides.forEach((slide,index)=>{
        const button=slide.querySelector('button');button.setAttribute('aria-pressed',String(index===instance.activeIndex));
        button.tabIndex=slide.classList.contains('swiper-slide-visible')?0:-1;
      });
    };
    instance.on('slideChange',update); instance.on('resize',update); instance.on('transitionEnd',update);
    card.querySelectorAll('[data-step]').forEach(button=>button.addEventListener('click',()=>Number(button.dataset.step)>0?instance.slideNext():instance.slidePrev()));
    const keys=(event)=>{
      const back=type==='vertical'?'ArrowUp':'ArrowLeft',forward=type==='vertical'?'ArrowDown':'ArrowRight';
      if(event.key!==back&&event.key!==forward)return;
      event.preventDefault(); event.key===forward?instance.slideNext():instance.slidePrev();
    };
    element.addEventListener('keydown',keys);
    if(thumbs){
      const thumbElement=card.querySelector('.gallery-thumbs');
      thumbElement.addEventListener('keydown',keys);
      thumbs.slides.forEach((slide,index)=>slide.querySelector('button').addEventListener('click',()=>instance.slideTo(index)));
      thumbs.on('setTranslate',update);thumbs.on('resize',update);
    }
    update();
  });
  reduced.addEventListener('change',()=>instances.forEach(instance=>{instance.params.speed=reduced.matches?0:300;instance.setTransition(0);}));
})();
