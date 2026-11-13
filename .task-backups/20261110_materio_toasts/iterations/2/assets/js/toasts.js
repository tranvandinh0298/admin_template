(() => {
 const root=document.querySelector('.toasts-page main');if(!root)return;
 const colors={primary:'#7540de',secondary:'#64676e',success:'#358100',danger:'#bd303a',error:'#bd303a',warning:'#8b6200',info:'#006f9f',dark:'#2e263d'};
 const icons={success:'circle-check',error:'circle-xmark',warning:'triangle-exclamation',info:'circle-info'};
 const instances=new Map(),records=new Set();let sequence=0;
 const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
 const escape=text=>text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function dismiss(record){if(record.closed)return;record.closed=true;clearTimeout(record.timer);records.delete(record);const focused=record.node.contains(document.activeElement);record.instance.dismiss(record.notification);if(focused&&record.launcher?.isConnected)record.launcher.focus({preventScroll:true});setTimeout(()=>{if(record.node.isConnected)record.node.dispatchEvent(new Event('animationend'));},reduced()?0:450);}
 function clear(){[...records].forEach(dismiss);}
 function show({message,type='primary',position='top-right',duration=5000,dismissible=true,ripple=false,animation='',launcher}){
  const [y,x]=position.split('-');let instance=instances.get(position);if(!instance){instance=new Notyf({duration:0,position:{x,y},ripple:false,dismissible:false});instances.set(position,instance);}
  const className='ts-toast-'+(++sequence),notification=instance.open({type:'custom',message:escape(message),duration:0,dismissible,ripple:ripple&&!reduced(),background:colors[type],className,icon:{className:'fa-solid fa-'+(icons[type]||'bell'),tagName:'i',color:'white'}});
  const node=document.querySelector('.'+className),container=node.closest('.notyf');container.dataset.x=x;container.dataset.y=y;container.setAttribute('aria-label',position+' notifications');
  // Notyf owns rendering/removal; replace its HTML-oriented announcer with plain-text live regions.
  document.querySelectorAll('.notyf-announcer').forEach(el=>{el.setAttribute('aria-live','off');el.setAttribute('aria-hidden','true');});
  const live=root.querySelector(['error','warning'].includes(type)?'#ts-urgent':'#ts-polite');live.textContent='';setTimeout(()=>live.textContent=message,30);
  node.tabIndex=0;node.setAttribute('role','group');node.setAttribute('aria-label',type+' notification');node.querySelectorAll('i').forEach(i=>i.setAttribute('aria-hidden','true'));
  const close=node.querySelector('.notyf__dismiss-btn');if(close)close.setAttribute('aria-label','Dismiss notification');
  if(animation&&!reduced()){const messageNode=node.querySelector('.notyf__message');messageNode.classList.add('ts-arrival','animate__animated',animation==='animate__fade'?'animate__fadeIn':animation);}
  const record={node,instance,notification,launcher,remaining:duration,started:0,timer:null,closed:false,hover:false,focus:false};records.add(record);
  function resume(){if(record.closed||!duration||record.hover||record.focus)return;record.started=performance.now();record.timer=setTimeout(()=>dismiss(record),Math.max(0,record.remaining));}
  function pause(){if(record.timer){clearTimeout(record.timer);record.timer=null;record.remaining-=performance.now()-record.started;}}
  node.addEventListener('pointerenter',()=>{record.hover=true;pause();});node.addEventListener('pointerleave',()=>{record.hover=false;resume();});node.addEventListener('focusin',()=>{record.focus=true;pause();});node.addEventListener('focusout',()=>setTimeout(()=>{record.focus=node.contains(document.activeElement);resume();},0));
  // Capture dismissal to retain library lifecycle while also cancelling adapter timers.
  close?.addEventListener('click',event=>{event.stopImmediatePropagation();dismiss(record);},true);
  node.addEventListener('keydown',event=>{if(event.key==='Escape'&&dismissible){event.preventDefault();event.stopPropagation();dismiss(record);}});
  resume();
 }
 const text='Hello, world! This is a toast message.';
 root.querySelector('#ts-show-animation').addEventListener('click',event=>show({message:text,type:root.querySelector('#ts-color').value,animation:root.querySelector('#ts-animation').value,launcher:event.currentTarget}));
 root.querySelector('#ts-show-placement').addEventListener('click',event=>show({message:text,type:root.querySelector('#ts-placement-color').value,position:root.querySelector('#ts-placement').value,launcher:event.currentTarget}));
 root.querySelector('#ts-form').addEventListener('submit',event=>{event.preventDefault();const input=root.querySelector('#ts-duration'),raw=input.value.trim(),duration=Number(raw),dismissible=root.querySelector('#ts-dismissible').checked,error=root.querySelector('#ts-error');if(!raw||!Number.isInteger(duration)||duration<0||duration>2147483647||(!duration&&!dismissible)){error.textContent='Enter a whole duration from 0 to 2147483647 milliseconds. For 0, enable Dismissible.';input.setAttribute('aria-invalid','true');input.focus();return;}error.textContent='';input.removeAttribute('aria-invalid');show({message:root.querySelector('#ts-message').value.trim()||'Hello, world! This is a notification demonstration.',type:root.querySelector('[name=ts-type]:checked').value,position:root.querySelector('[name=ts-y]:checked').value+'-'+root.querySelector('[name=ts-x]:checked').value,duration,dismissible,ripple:root.querySelector('#ts-ripple').checked,launcher:root.querySelector('#ts-form [type=submit]')});});
 root.querySelector('#ts-clear').addEventListener('click',clear);
 root.querySelectorAll('[data-preview-close]').forEach(button=>button.addEventListener('click',()=>{const article=button.closest('.ts-preview');const next=article.nextElementSibling?.querySelector('button')||root.querySelector('#ts-clear');article.remove();next.focus({preventScroll:true});}));
})();
