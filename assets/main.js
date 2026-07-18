/* OPEN AGENT — main.js (no backend, no external services) */
(function(){
  "use strict";

  /* mobile menu */
  var btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){nav.classList.toggle('open');});
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');});});}

  /* scroll reveal */
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
    els.forEach(function(el){io.observe(el);});
  } else {els.forEach(function(el){el.classList.add('in');});}

  /* portfolio lightbox */
  var lb=document.getElementById('lb');
  if(lb){
    var limg=lb.querySelector('img'),lname=lb.querySelector('.meta b'),lrole=lb.querySelector('.meta span');
    document.querySelectorAll('.pf').forEach(function(p){
      p.addEventListener('click',function(){
        var im=p.querySelector('img');
        limg.src=im.src;limg.alt=im.alt;
        lname.textContent=im.dataset.name||'';
        lrole.textContent=im.dataset.role||'';
        lb.classList.add('open');document.body.style.overflow='hidden';
      });
    });
    lb.addEventListener('click',function(){lb.classList.remove('open');document.body.style.overflow='';});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){lb.classList.remove('open');document.body.style.overflow='';}});
  }

  /* contact form — local confirmation only */
  var form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var msg=document.getElementById('formMsg');
      if(msg){msg.textContent='✅ Thanks! Your message has been recorded. We will reach out via WhatsApp or email soon.';msg.style.display='block';}
      form.reset();
    });
  }
})();
