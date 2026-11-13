(() => {
 const $ = window.jQuery;
 if (!$?.fn.jstree) { document.querySelectorAll('.tv-status').forEach(el => el.textContent = 'Treeview could not load. Please reload the page.'); return; }
 const types = {
  default: {icon:'fa-solid fa-folder tv-folder'},
  html:{icon:'fa-solid fa-file-code tv-html',max_children:0}, css:{icon:'fa-solid fa-file-code tv-css',max_children:0},
  img:{icon:'fa-solid fa-image tv-img',max_children:0}, js:{icon:'fa-solid fa-file-code tv-js',max_children:0}, file:{icon:'fa-solid fa-file-lines tv-file',max_children:0}
 };
 const data = prefix => [
  {id:prefix+'-css',text:'css',children:[{id:prefix+'-app-css',text:'app.css',type:'css'},{id:prefix+'-style-css',text:'style.css',type:'css'}]},
  {id:prefix+'-img',text:'img',state:{opened:true},children:[{id:prefix+'-bg',text:'bg.jpg',type:'img'},{id:prefix+'-logo',text:'logo.png',type:'img'},{id:prefix+'-avatar',text:'avatar.png',type:'img'}]},
  {id:prefix+'-js',text:'js',state:{opened:true},children:[{id:prefix+'-jquery',text:'jquery.js',type:'js'},{id:prefix+'-app-js',text:'app.js',type:'js'}]},
  ...['index.html','page-one.html','page-two.html'].map((text,i)=>({id:prefix+'-html-'+i,text,type:'html'}))
 ];
 const status = (key,text) => document.getElementById('tv-status-'+key).textContent = text;
 const selected = instance => instance.get_selected()[0];
 function action(instance, name) {
  const id=selected(instance),node=instance.get_node(id); if(!node){status('context','Select a node first.');return;}
  if(name==='create'){const parent=node.type==='default'?node.id:node.parent;const created=instance.create_node(parent,{text:'New folder',type:'default'});if(created){instance.deselect_all();instance.select_node(created);instance.edit(created);}}
  if(name==='rename') instance.edit(id);
  if(name==='delete') { const parent=node.parent;instance.delete_node(id);if(parent!=='#')instance.select_node(parent);status('context','Node deleted from this demo.'); }
  if(name==='cut') {instance.cut(id);status('context','Node cut. Select a folder and choose Paste.');}
  if(name==='copy') {instance.copy(id);status('context','Node copied. Select a folder and choose Paste.');}
  if(name==='paste'){if(node.type!=='default'){status('context','Select a folder to paste into.');return;}instance.paste(id);}
 }
 for(const key of ['basic','icons','context','drag','checkbox']){
  const tree=$('#tv-'+key), editable=key==='context'||key==='drag';
  tree.jstree({core:{force_text:true,multiple:key==='checkbox',data:data(key),themes:{name:'default',dots:false},check_callback:editable?function(operation,node,parent,position,more){if(more?.is_multi)return false;return true;}:false},
   plugins:['types',...(key==='context'?['contextmenu']:[]),...(key==='drag'?['dnd']:[]),...(key==='checkbox'?['checkbox','wholerow']:[])],
   types:key==='basic'?Object.fromEntries(Object.entries(types).map(([k,v])=>[k,{...v,icon:k==='default'?'fa-solid fa-folder tv-folder':'fa-solid fa-file-lines tv-file'}])):types,
   checkbox:{tie_selection:false,three_state:true},dnd:{copy:false,inside_pos:'last'},
   contextmenu:{items:()=>Object.fromEntries(['Create','Rename','Delete','Cut','Copy','Paste'].map(label=>[label.toLowerCase(),{label,action:()=>action(tree.jstree(true),label.toLowerCase())}]))}
  });
  tree.on('changed.jstree',()=>{if(key!=='checkbox')status(key,tree.jstree(true).get_selected(true).map(n=>'Selected: '+n.text).join(', '));});
  tree.on('check_node.jstree uncheck_node.jstree',()=>status(key,tree.jstree(true).get_checked().length+' checked nodes.'));
  if(key==='context'){
   document.querySelector('[data-tree-demo=context]').addEventListener('click',event=>{const button=event.target.closest('[data-tv-action]');if(button)action(tree.jstree(true),button.dataset.tvAction);});
   tree.on('keydown',event=>{if((event.shiftKey&&event.key==='F10')||event.key==='ContextMenu'){event.preventDefault();const instance=tree.jstree(true);instance.show_contextmenu(instance.get_node(event.target.closest('.jstree-node')));}});
   tree.on('rename_node.jstree create_node.jstree move_node.jstree copy_node.jstree',()=>status(key,'Demo tree updated. No files were changed.'));
  }
  if(key==='drag'){
   const destination=document.getElementById('tv-destination');
   const sync=()=>{const instance=tree.jstree(true),old=destination.value;destination.replaceChildren(new Option('Tree root','#'));instance.get_json('#',{flat:true}).forEach(n=>destination.add(new Option(n.text,n.id)));if([...destination.options].some(o=>o.value===old))destination.value=old;};
   tree.on('ready.jstree move_node.jstree',sync);
   document.getElementById('tv-move').addEventListener('click',()=>{const instance=tree.jstree(true),id=selected(instance),target=destination.value,position=document.getElementById('tv-position').value;if(!id){status(key,'Select a node to move first.');return;}if(target==='#'&&position!=='last'){status(key,'Choose Inside (last) for the tree root.');return;}const moved=instance.move_node(id,target,position);status(key,moved?'Node moved.':'Cannot move here: choose a folder or a valid sibling outside this node.');});
   tree.on('move_node.jstree',()=>status(key,'Node moved.'));
  }
 }
 const ajax=$('#tv-ajax'),retry=document.getElementById('tv-retry');let loading=false;
 async function load(){
  if(loading)return;loading=true;retry.hidden=true;status('ajax','Loading tree…');ajax.attr('aria-busy','true');
  try{
   if(location.protocol==='file:')throw Error('Open this page through your local HTTP server to load Ajax data.');
   const response=await fetch('assets/json/treeview-data.json');if(!response.ok)throw Error('HTTP '+response.status);
   const nodes=await response.json();if(!Array.isArray(nodes))throw Error('Invalid tree data');
   ajax.jstree({core:{force_text:true,multiple:false,data:nodes,themes:{dots:false}},plugins:['types','state'],types,state:{key:'materio-treeview-ajax-v1'}});
   status('ajax','Tree loaded.');
  }catch(error){status('ajax',location.protocol==='file:'?error.message:'Unable to load the tree. Please retry.');retry.hidden=false;}
  finally{loading=false;ajax.attr('aria-busy','false');}
 }
 retry.addEventListener('click',load);load();
})();
