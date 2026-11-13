(() => {
  const root=document.querySelector('.modals-page');if(!root)return;
  let active=null,launcher=null,overflow='',switching=false;
  function clearMedia(dialog){dialog.querySelectorAll('iframe').forEach(e=>e.remove());}
  function step(dialog,index){const steps=[...dialog.querySelectorAll('[data-step]')];if(!steps.length)return;index=Math.max(0,Math.min(index,steps.length-1));dialog.dataset.index=index;steps.forEach((e,i)=>e.hidden=i!==index);dialog.querySelectorAll('[data-step-to]').forEach((e,i)=>{if(i===index)e.setAttribute('aria-current','step');else e.removeAttribute('aria-current');});dialog.querySelector('[data-prev]').disabled=index===0;dialog.querySelector('[data-next]').textContent=index===steps.length-1?'Finish':'Next';}
  function close(){if(!active)return;active.close();}
  function open(id,source,swap=false){const dialog=document.getElementById('modal-'+id);if(!dialog)return;if(!swap){launcher=source;overflow=document.body.style.overflow;}if(active){switching=true;clearMedia(active);active.close();switching=false;}active=dialog;document.body.style.overflow='hidden';step(dialog,0);dialog.querySelector('.modal-result').textContent='';dialog.classList.remove(...[...dialog.classList].filter(c=>c.startsWith('animate__')));if(id==='animation'){const animation=root.querySelector('#animation-choice').value;dialog.classList.add('animate__animated','animate__'+animation);}if(id==='top')dialog.classList.add('animate__animated','animate__slideInDown');dialog.showModal();dialog.querySelector('h2').focus();}
  root.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>open(button.dataset.open,button)));
  root.querySelectorAll('dialog').forEach(dialog=>{
    let outside=false;
    dialog.addEventListener('pointerdown',event=>{const b=dialog.getBoundingClientRect();outside=event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom;});
    dialog.addEventListener('pointerup',event=>{const b=dialog.getBoundingClientRect();if(outside&&(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)&&!dialog.dataset.static)close();outside=false;});
    dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.stopPropagation();event.preventDefault();if(!dialog.dataset.static)close();}});
    dialog.addEventListener('cancel',event=>{event.preventDefault();if(!dialog.dataset.static)close();});
    dialog.addEventListener('close',()=>{clearMedia(dialog);if(active!==dialog)return;active=null;if(!switching){document.body.style.overflow=overflow;if(launcher?.isConnected)launcher.focus({preventScroll:true});}});
    dialog.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',close));
    dialog.querySelectorAll('[data-switch]').forEach(button=>button.addEventListener('click',()=>open(button.dataset.switch,launcher,true)));
    dialog.querySelector('form').addEventListener('submit',event=>{event.preventDefault();dialog.querySelector('.modal-result').textContent='Demonstration complete. No information was sent.';});
    dialog.querySelector('[data-prev]')?.addEventListener('click',()=>step(dialog,Number(dialog.dataset.index)-1));
    dialog.querySelector('[data-next]')?.addEventListener('click',()=>{const i=Number(dialog.dataset.index);if(i===2)dialog.querySelector('.modal-result').textContent='Onboarding demonstration complete.';else step(dialog,i+1);});
    dialog.querySelectorAll('[data-step-to]').forEach(button=>button.addEventListener('click',()=>step(dialog,Number(button.dataset.stepTo))));
    dialog.querySelector('[data-load-video]')?.addEventListener('click',()=>{if(dialog.querySelector('iframe'))return;const frame=document.createElement('iframe');frame.title='YouTube demonstration video';frame.src='https://www.youtube-nocookie.com/embed/EngW7tLk6R8';frame.allow='fullscreen; picture-in-picture';frame.allowFullscreen=true;dialog.querySelector('.video-slot').append(frame);});
  });
})();
