(function(){
'use strict';

/* --- Config --- */
var SITE = {
  name: 'OpenAgent',
  email: 'abeerinfo5566@gmail.com',
  whatsapp: 'https://wa.me/923703159642?text=' + encodeURIComponent('Hi OpenAgent, I\'m interested in learning how you can help my business generate more qualified leads. Can we schedule a quick call?')
};

/* --- Portfolio Data --- */
var portfolio = [
  {img:'assets/images/portfolio/portfolio13.png',name:'E-commerce Ad Creative',role:'Meta Ads'},
  {img:'assets/images/portfolio/portfolio16.png',name:'Campaign Results',role:'Meta Ads'},
  {img:'assets/images/portfolio/portfolio17.png',name:'Brand Identity',role:'Design'},
  {img:'assets/images/portfolio/portfolio18.png',name:'AI Social Post',role:'AI Content'},
  {img:'assets/images/portfolio/portfolio19.png',name:'Shopify Layout',role:'Shopify'},
  {img:'assets/images/portfolio/portfolio20.png',name:'Ad Variant',role:'Meta Ads'},
  {img:'assets/images/portfolio/portfolio21.png',name:'Marketing Graphic',role:'Design'},
  {img:'assets/images/portfolio/portfolio_12.png',name:'Perfume Brand Work',role:'Beauty / D2C'},
  {img:'assets/images/portfolio/portfolio_14.png',name:'Creative Set',role:'Meta Ads'}
];

/* --- Mobile Menu --- */
function initMenu(){
  var btn=document.getElementById('menuBtn');
  var nav=document.getElementById('nav');
  if(!btn||!nav)return;
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.classList.toggle('active',open);
    btn.setAttribute('aria-expanded',open);
    document.body.style.overflow=open?'hidden':'';
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      nav.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded','false');
      document.body.style.overflow='';
    });
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&nav.classList.contains('open')){
      nav.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded','false');
      document.body.style.overflow='';
      btn.focus();
    }
  });
}

/* --- Scroll Reveal --- */
function initReveal(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    els.forEach(function(e){e.classList.add('in')});
    return;
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.1});
  els.forEach(function(el){io.observe(el)});
}

/* --- Stat Counters --- */
function initCounters(){
  var els=document.querySelectorAll('[data-count]');
  if(!('IntersectionObserver' in window)){
    els.forEach(function(e){e.textContent=parseInt(e.dataset.count).toLocaleString()});
    return;
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting)return;
      var el=entry.target;
      var target=parseInt(el.dataset.count);
      var dur=2000;
      var start=performance.now();
      function tick(now){
        var p=Math.min((now-start)/dur,1);
        var ease=1-Math.pow(1-p,3);
        el.textContent=Math.floor(ease*target).toLocaleString();
        if(p<1)requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  },{threshold:0.3});
  els.forEach(function(el){io.observe(el)});
}

/* --- Portfolio Grid --- */
function initPortfolio(){
  var grid=document.getElementById('pfGrid');
  if(!grid)return;
  portfolio.forEach(function(p){
    var div=document.createElement('div');
    div.className='pf reveal';
    div.innerHTML='<img src="'+p.img+'" alt="'+p.name+'" loading="lazy" decoding="async" width="400" height="300"><div class="pf-overlay"><h4>'+p.name+'</h4><span>'+p.role+'</span></div>';
    div.addEventListener('click',function(){openLightbox(p.img,p.name+' — '+p.role)});
    grid.appendChild(div);
  });
}

/* --- Lightbox --- */
var lbEl,lbImg,lbClose;
function initLightbox(){
  lbEl=document.getElementById('lb');
  lbImg=lbEl?lbEl.querySelector('img'):null;
  lbClose=document.getElementById('lbClose');
  if(!lbEl)return;
  lbClose.addEventListener('click',closeLightbox);
  lbEl.addEventListener('click',function(e){if(e.target===lbEl)closeLightbox()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lbEl.classList.contains('active'))closeLightbox()});
}
function openLightbox(src,alt){
  if(!lbEl)return;
  lbImg.src=src;lbImg.alt=alt;
  lbEl.classList.add('active');
  document.body.style.overflow='hidden';
  lbClose.focus();
}
function closeLightbox(){
  if(!lbEl)return;
  lbEl.classList.remove('active');
  document.body.style.overflow='';
}

/* --- Testimonials --- */
function initTestimonials(){
  var track=document.getElementById('testTrack');
  var prev=document.getElementById('testPrev');
  var next=document.getElementById('testNext');
  if(!track||!prev||!next)return;
  prev.addEventListener('click',function(){track.scrollBy({left:-360,behavior:'smooth'})});
  next.addEventListener('click',function(){track.scrollBy({left:360,behavior:'smooth'})});
}

/* --- Contact Form --- */
function initForm(){
  var form=document.getElementById('contactForm');
  if(!form)return;
  var msg=document.getElementById('formMsg');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    var data=new FormData(form);
    var labels={
      name:'Name',email:'Email',phone:'Phone',company:'Company',website:'Website',
      industry:'Industry',market:'Market',project_value:'Project value',budget:'Monthly marketing budget',
      current_method:'Current lead generation method',primary_goal:'Primary goal',message:'Project details'
    };
    var lines=['Hi OpenAgent, I would like a free growth audit.',''];
    Object.keys(labels).forEach(function(key){
      var value=(data.get(key)||'').trim();
      if(value)lines.push(labels[key]+': '+value);
    });
    var url='https://wa.me/923703159642?text='+encodeURIComponent(lines.join('\n'));
    if(msg){
      msg.textContent='Opening WhatsApp with your details. Please send the pre-filled message to complete your enquiry.';
      msg.className='form-msg success';
      msg.style.display='block';
    }
    if(typeof gtag==='function')gtag('event','generate_lead',{method:'WhatsApp contact form'});
    window.open(url,'_blank','noopener,noreferrer');
    form.reset();
  });
}

/* --- Topbar Scroll --- */
function initTopbar(){
  var topbar=document.querySelector('.topbar');
  if(!topbar)return;
  var scrolled=false;
  function check(){
    var s=window.scrollY>40;
    if(s!==scrolled){scrolled=s;topbar.classList.toggle('scrolled',s)}
  }
  window.addEventListener('scroll',check,{passive:true});
  check();
}

/* --- Active Nav --- */
function initActiveNav(){
  var links=document.querySelectorAll('.nav a:not(.btn)');
  if(!links.length)return;
  var path=window.location.pathname.split('/').pop()||'index.html';
  links.forEach(function(a){
    var href=a.getAttribute('href');
    if(href===path||(path==='index.html'&&(href==='/'||href==='index.html'))){
      a.style.color='var(--color-text)';
    }
  });
}

/* --- Init --- */
document.addEventListener('DOMContentLoaded',function(){
  initMenu();
  initReveal();
  initCounters();
  initPortfolio();
  initLightbox();
  initTestimonials();
  initForm();
  initTopbar();
  initActiveNav();
});

})();
