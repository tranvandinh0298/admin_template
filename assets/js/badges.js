(() => {
  const root = document.querySelector('.badges-page main');
  if (!root) return;
  root.addEventListener('click', event => {
    const button = event.target.closest('button.btn');
    if (!button || button.disabled) return;
    const box = button.getBoundingClientRect(), size = Math.hypot(box.width,box.height)*2;
    const wave = document.createElement('span'); wave.className='btn-ripple'; wave.setAttribute('aria-hidden','true');
    Object.assign(wave.style,{width:`${size}px`,height:`${size}px`,left:`${event.detail?event.clientX-box.left:box.width/2}px`,top:`${event.detail?event.clientY-box.top:box.height/2}px`});
    button.append(wave); wave.addEventListener('animationend',()=>wave.remove(),{once:true}); setTimeout(()=>wave.remove(),800);
  });
})();
