(function(){
var S={design:'classic',color:'#1d4ed8',o:'h',photo:'',logo:'',ps:'auto',corner:'r',font:'m',nameColor:'#0f172a',nameBold:true,nameItalic:false,nameSize:'m',bar:true,sig:true,foot:true,
d:{title:'Student ID card',guardian:'Imran Khan',dob:'12 Mar 2004',email:'shahsawar@example.com',inst:'City Science College',tag:'Peshawar, Pakistan',name:'Shahsawar',id:'CS-2026-014',prog:'BS Computer Science',dept:'Computer Science',sess:'2022 – 2026',blood:'B+',phone:'+92 300 1234567',valid:'30 Jun 2027',addr:'University Road, Peshawar',emer:'+92 321 7654321',note:'This card is the property of the institution. It is non-transferable and must be carried on campus. If found, please return it to the address shown.'}};
var F=[['name','Full name'],['email','Email'],['inst','Institute name'],['tag','Campus or tagline'],['id','ID number'],['prog','Program or class'],['dept','Department'],['sess','Session'],['blood','Blood group'],['phone','Phone'],['valid','Valid until'],['dob','Date of birth'],['guardian','Father or guardian'],['title','Card title (footer)'],['addr','Address'],['emer','Emergency contact'],['note','Back-side note']];
var DES=[['classic','Classic','#fff'],['sidebar','Sidebar','linear-gradient(90deg,var(--c) 22%,#fff 22%)'],['wave','Wave','linear-gradient(180deg,var(--c) 55%,#fff 55%)'],['bold','Bold','var(--c)'],['midnight','Midnight','linear-gradient(135deg,#0b1220 55%,var(--c))'],['minimal','Minimal','linear-gradient(180deg,#fff 70%,var(--c) 70%)'],['corporate','Corporate','linear-gradient(180deg,#fff 38%,var(--c) 38% 52%,#fff 52% 80%,var(--c) 80%)'],['frame','Frame','linear-gradient(var(--c) 0 0) top/100% 6px no-repeat,linear-gradient(var(--c) 0 0) bottom/100% 6px no-repeat,#fff'],['soft','Soft','linear-gradient(#fff,#fff) center/60% 55% no-repeat,#e2e8f0']];
var COL=['#1d4ed8','#0b3d91','#4338ca','#6d28d9','#be185d','#be123c','#7f1d1d','#ea580c','#b45309','#a16207','#047857','#166534','#0f766e','#0e7490','#334155','#111827'];
var T={};'0 nnnwwnwnn,1 wnnwnnnnw,2 nnwwnnnnw,3 wnwwnnnnn,4 nnnwwnnnw,5 wnnwwnnnn,6 nnwwwnnnn,7 nnnwnnwnw,8 wnnwnnwnn,9 nnwwnnwnn,A wnnnnwnnw,B nnwnnwnnw,C wnwnnwnnn,D nnnnwwnnw,E wnnnwwnnn,F nnwnwwnnn,G nnnnnwwnw,H wnnnnwwnn,I nnwnnwwnn,J nnnnwwwnn,K wnnnnnnww,L nnwnnnnww,M wnwnnnnwn,N nnnnwnnww,O wnnnwnnwn,P nnwnwnnwn,Q nnnnnnwww,R wnnnnnwwn,S nnwnnnwwn,T nnnnwnwwn,U wwnnnnnnw,V nwwnnnnnw,W wwwnnnnnn,X nwnnwnnnw,Y wwnnwnnnn,Z nwwnwnnnn,- nwnnnnwnw,. wwnnnnwnn,_ nwwnnnwnn,* nwnnwnwnn'.split(',').forEach(function(x){T[x[0]==='_'?' ':x[0]]=x.slice(2)});
var USER=/^$/;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function rgb(h){return[1,3,5].map(function(i){return parseInt(h.substr(i,2),16)})}
function mix(h,t,k){var c=rgb(h);return'rgb('+c.map(function(v){return Math.round(v+(t-v)*k)}).join(',')+')'}
function lum(h){var c=rgb(h).map(function(v){v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]}
function barcode(v){var s='*'+String(v).toUpperCase().replace(/[^0-9A-Z\-\. ]/g,'')+'*',x=0,r='';
for(var k=0;k<s.length;k++){var p=T[s[k]];for(var i=0;i<9;i++){var w=p[i]==='w'?3:1;if(i%2===0)r+='<rect x="'+x+'" width="'+w+'" height="30"/>';x+=w}x+=1}
return'<svg viewBox="0 0 '+x+' 30" preserveAspectRatio="none" fill="#0f172a">'+r+'</svg>'}
var SIL='<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4.2"/><path d="M3.5 21c.6-4.6 4-7 8.5-7s7.900 2.400 8.500 7z"/></svg>';
function init(n){var w=n.trim().split(/\s+/).slice(0,2).map(function(x){return x[0]}).join('');return esc(w.toUpperCase()||'ID')}
function vars(){var a=S.color,c=lum(a)>.45?'#101828':'#ffffff';var r=rgb(a);
return'--a:'+a+';--oa:'+c+';--ad:'+mix(a,0,.4)+';--al:'+mix(a,255,.55)+';--tn:'+mix(a,255,.9)+';--at:rgba('+r.join(',')+',.55);--name-color:'+S.nameColor+';--name-weight:'+(S.nameBold?'800':'500')+';--name-style:'+(S.nameItalic?'italic':'normal')}
function row(l,v){return v?'<dt>'+l+'</dt><dd>'+esc(v)+'</dd>':''}
function front(){var d=S.d;
return'<div class="hd"><div class="lg">'+(S.logo?'<img src="'+S.logo+'" alt="">':init(d.inst))+'</div><div><b>'+esc(d.inst)+'</b><small>'+esc(d.tag)+'</small></div></div>'+
'<div class="bd"><div class="ph">'+(S.photo?'<img src="'+S.photo+'" alt="Student photo">':SIL)+'</div><div class="in"><h3>'+esc(d.name)+'</h3><p class="ro">'+esc(d.prog)+'</p><dl>'+row('ID no.',d.id)+row('Dept.',d.dept)+row('Session',d.sess)+row('Blood',d.blood)+row('Phone',d.phone)+'</dl></div></div>'+
(S.foot?'<div class="ft"><span>'+esc(d.title)+'</span><span>Valid until '+esc(d.valid)+'</span></div>':'')}
function back(){var d=S.d;
return'<div class="hd"><div class="lg">'+(S.logo?'<img src="'+S.logo+'" alt="">':init(d.inst))+'</div><div><b>'+esc(d.inst)+'</b><small>'+esc(d.tag)+'</small></div></div>'+
'<div class="bk"><p class="tm">'+esc(d.note)+'</p><dl>'+row('Guardian',d.guardian)+row('Born',d.dob)+row('Emergency',d.emer)+row('Email',d.email)+row('Address',d.addr)+'</dl><div class="bt">'+(S.bar?'<div class="bc">'+barcode(d.id)+'<span>'+esc(d.id)+'</span></div>':'')+(S.sig?'<div class="sg">Issuing authority</div>':'')+'</div></div>'}
function render(){var el=document.getElementById('cards');
var cls='card d-'+S.design+(S.o==='v'?' v':'')+(S.corner==='s'?' sq':'')+(S.ps!=='auto'?' ps-'+S.ps:'')+(S.font!=='m'?' f'+S.font:'')+' name-'+S.nameSize;
el.innerHTML='<div class="slot"><small>Front</small><div class="'+cls+'" id="cf" style="'+vars()+'">'+front()+'</div><button class="btn" data-dl="cf">Download front</button></div>'+
'<div class="slot"><small>Back</small><div class="'+cls+'" id="cb" style="'+vars()+'">'+back()+'</div><button class="btn" data-dl="cb">Download back</button></div>';
fit()}
function fit(){var st=document.querySelector('.stage'),w=st.clientWidth-36,cw=S.o==='v'?13.25:21,two=2*cw*16+26<=w;
var fs=Math.max(8,Math.min(16,(two?(w-26)/2:w)/cw));document.getElementById('cards').style.fontSize=fs+'px'}
function buildUI(){
var ds=document.getElementById('designs');ds.innerHTML=DES.map(function(x){return'<button class="dz" data-d="'+x[0]+'" aria-pressed="'+(S.design===x[0])+'"><i style="background:'+x[2]+';--c:'+S.color+'"></i>'+x[1]+'</button>'}).join('');
var sw=document.getElementById('sw');sw.innerHTML=COL.map(function(c){return'<button style="background:'+c+'" data-c="'+c+'" aria-label="Colour '+c+'" aria-pressed="'+(S.color===c)+'"></button>'}).join('')+'<input type="color" id="cc" value="'+S.color+'" aria-label="Custom colour">';
}
var OPT=[['ps','Photo shape',[['auto','Auto'],['s','Square'],['r','Rounded'],['c','Circle']]],['corner','Card corners',[['r','Rounded'],['s','Square']]],['font','Typeface',[['m','Modern'],['s','Serif'],['d','Display']]]];
var TG=[['bar','Barcode on back'],['sig','Signature line on back'],['foot','Footer strip on front']];
function buildOpts(){document.getElementById('opts').innerHTML=OPT.map(function(o){return'<div><div class="ol">'+o[1]+'</div><div class="seg" data-opt="'+o[0]+'">'+o[2].map(function(x){return'<button data-v="'+x[0]+'" aria-pressed="'+(S[o[0]]===x[0])+'">'+x[1]+'</button>'}).join('')+'</div></div>'}).join('')+TG.map(function(t){return'<label class="ck"><input type="checkbox" data-t="'+t[0]+'"'+(S[t[0]]?' checked':'')+'> '+t[1]+'</label>'}).join('')}
function buildForm(){document.getElementById('form').innerHTML=F.map(function(f){var k=f[0];
if(k==='note')return'<label>'+f[1]+'<textarea data-k="'+k+'">'+esc(S.d[k])+'</textarea></label>';
return'<label>'+f[1]+'<input type="'+(k==='email'?'email':'text')+'" data-k="'+k+'" value="'+esc(S.d[k])+'"></label>'}).join('')}
function readImg(file,key){if(!file)return;if(file.size>8e6){msg('Image is over 8 MB. Choose a smaller one.');return}
var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var m=700,k=Math.min(1,m/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);S[key]=c.toDataURL('image/jpeg',.9);render()};im.src=r.result};r.readAsDataURL(file)}
function msg(t){document.getElementById('msg').textContent=t}
async function dl(id){var side=id==='cf'?'front':'back';
try{var ds=window.claude&&claude.use?await claude.use('downloads'):null;if(window.claude&&!ds){msg('Saving files is not available in this view.');return}
msg('Preparing '+side+'…');var el=document.getElementById(id);
var cv=await html2canvas(el,{scale:(S.o==='v'?638:1012)/el.offsetWidth,backgroundColor:null,useCORS:true});
var blob=await new Promise(function(r){cv.toBlob(r,'image/png')});
var nm=(S.d.id||'student').replace(/[^\w\-]+/g,'_');
if(ds){await ds.save({filename:nm+'-'+side+'.png',data:blob})}else{var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=nm+'-'+side+'.png';document.body.appendChild(a);a.click();a.remove()}msg('Saved '+side+'.')}
catch(e){msg(e&&e.code==='declined'?'Download cancelled.':'Could not save the file. Try again.')}}
document.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
if(b.dataset.d){S.design=b.dataset.d;buildUI();render()}
else if(b.dataset.c){S.color=b.dataset.c;buildUI();render()}
else if(b.dataset.o){S.o=b.dataset.o;document.querySelectorAll('#ori button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});render()}
else if(b.closest('[data-opt]')){var g=b.closest('[data-opt]');S[g.dataset.opt]=b.dataset.v;g.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});render()}
else if(b.dataset.dl){dl(b.dataset.dl)}
else if(b.id==='clr'){S.photo='';S.logo='';render()}});
document.addEventListener('input',function(e){var t=e.target;
if(t.dataset&&t.dataset.k){S.d[t.dataset.k]=t.value;render()}
else if(t.dataset&&t.dataset.color){S[t.dataset.color]=t.value;render()}
else if(t.dataset&&t.dataset.t){S[t.dataset.t]=t.checked;render()}
else if(t.id==='cc'){S.color=t.value;document.querySelectorAll('#sw button').forEach(function(x){x.setAttribute('aria-pressed','false')});document.querySelectorAll('.dz i').forEach(function(i){i.style.setProperty('--c',S.color)});render()}});
document.getElementById('photo').addEventListener('change',function(e){readImg(e.target.files[0],'photo')});
document.getElementById('logo').addEventListener('change',function(e){readImg(e.target.files[0],'logo')});
window.addEventListener('resize',fit);
buildUI();buildForm();buildOpts();render();
})();
