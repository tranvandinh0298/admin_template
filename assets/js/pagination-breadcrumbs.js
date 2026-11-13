(() => {
 const root=document.querySelector('.pagination-breadcrumbs-page main');if(!root)return;
 root.addEventListener('click',event=>{const link=event.target.closest('[data-pb-demo]');if(!link)return;event.preventDefault();if(link.getAttribute('aria-disabled')==='true')return;const name=link.getAttribute('aria-label')||link.textContent.trim();root.querySelector('#pb-status').textContent=`${name}: static demonstration. Current location stays unchanged; no data was loaded.`;});
})();
