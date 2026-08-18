(function(){
'use strict'

/* --- data --- */
const site={name:'OpenAgent',email:'abeerinfo5566@gmail.com',wa:'https://wa.me/923703159642'}
const slides=[
  {img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80',eyebrow:'AI-Powered Growth',title:'Meta Ads, Shopify & AI automation that help D2C brands grow.',text:"I'm Abeer Nasir. I help e-commerce and D2C brands grow with Meta Ads, Shopify, AI automation and content that actually converts — not vanity metrics.",cta:'Start a project'},
  {img:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',eyebrow:'Data-Driven Marketing',title:'Small budgets, measured outcomes — every time.',text:'Real campaigns with real numbers. No fluff, no fake metrics. Just clear ROAS reporting and weekly optimization.',cta:'See my work'},
  {img:'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1600&q=80',eyebrow:'AI Automation',title:'Custom AI agents & workflows that save hours daily.',text:'No-code automation for lead capture, follow-ups, reporting and customer support. Built with ChatGPT, Claude, Gemini.',cta:'Explore services'}
]
const portfolio=[
  {img:'assets/images/portfolio/portfolio13.png',name:'E-commerce Ad Creative',role:'Meta Ads'},
  {img:'assets/images/portfolio/portfolio16.png',name:'Campaign Results',role:'Meta Ads'},
  {img:'assets/images/portfolio/portfolio17.png',name:'Brand Identity',role:'Design'},
  {img:'assets/images/portfolio/portfolio18.png',name:'AI Social Post',role:'AI Content'},
  {img:'assets/images/portfolio/portfolio19.png',name:'Shopify Layout',role:'Shopify'},
  {img:'assets/images/portfolio/portfolio20.png',name:'Ad Variant',role:'Meta Ads'},
  {img:'assets/images/portfolio/portfolio21.png',name:'Marketing Graphic',role:'Design'},
  {img:'assets/images/portfolio/portfolio_12.png',name:'Perfume Brand Work',role:'Beauty / D2C'},
  {img:'assets/images/portfolio/portfolio_14.png',name:'Creative Set',role:'Meta Ads'}
]

/* --- hero slider --- */
function initSlider(){
  const wrap=document.getElementById('heroSlides')
  if(!wrap)return
  const dots=document.getElementById('heroDots')
  const bar=document.getElementById('heroBar')
  let idx=0,timer
  slides.forEach((s,i)=>{
    const div=document.createElement('div')
    div.className='hero-slide'+(i===0?' active':'')
    div.style.backgroundImage='url('+s.img+')'
    wrap.appendChild(div)
    const btn=document.createElement('button')
    btn.className=i===0?'active':''
    btn.addEventListener('click',()=>go(i))
    dots.appendChild(btn)
  })
  function go(i){
    wrap.querySelectorAll('.hero-slide').forEach((e,j)=>e.classList.toggle('active',j===i))
    dots.querySelectorAll('button').forEach((e,j)=>e.classList.toggle('active',j===i))
    idx=i
    resetBar()
    updateText(i)
  }
  function resetBar(){
    bar.style.transition='none';bar.style.width='0'
    requestAnimationFrame(()=>{bar.style.transition='width 5s linear';bar.style.width='100%'})
  }
  function updateText(i){
    const s=slides[i]
    const el=document.getElementById('heroText')
    if(el){
      el.innerHTML='<span class="eyebrow">'+s.eyebrow+'</span><h1>'+s.title+'</h1><p>'+s.text+'</p><div class="cta-row"><a href="contact.html" class="btn">'+s.cta+' →</a><a href="#services" class="btn ghost">Explore services</a></div>'
    }
  }
  function next(){go((idx+1)%slides.length)}
  function start(){timer=setInterval(next,6000);resetBar()}
  function stop(){clearInterval(timer)}
  start()
  wrap.addEventListener('mouseenter',stop)
  wrap.addEventListener('mouseleave',start)
  updateText(0)
}

/* --- mobile menu --- */
function initMenu(){
  const btn=document.getElementById('menuBtn'),nav=document.getElementById('nav')
  if(!btn||!nav)return
  btn.addEventListener('click',()=>nav.classList.toggle('open'))
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))
}

/* --- scroll reveal --- */
function initReveal(){
  const els=document.querySelectorAll('.reveal')
  if(!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('in'));return}
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1})
  els.forEach(el=>io.observe(el))
}

/* --- stat counters --- */
function initCounters(){
  const els=document.querySelectorAll('[data-count]')
  if(!('IntersectionObserver'in window)){els.forEach(e=>e.textContent=e.dataset.count);return}
  const io=new IntersectionObserver(es=>{es.forEach(e=>{
    if(!e.isIntersecting)return
    const el=e.target,target=parseInt(el.dataset.count),dur=2000
    const start=performance.now()
    function tick(now){
      const p=Math.min((now-start)/dur,1)
      const ease=1-Math.pow(1-p,3)
      el.textContent=Math.floor(ease*target).toLocaleString()
      if(p<1)requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    io.unobserve(el)
  })},{threshold:.3})
  els.forEach(el=>io.observe(el))
}

/* --- portfolio grid + lightbox --- */
function initPortfolio(){
  const grid=document.getElementById('pfGrid')
  if(!grid)return
  portfolio.forEach((p,i)=>{
    const div=document.createElement('div')
    div.className='pf reveal'
    div.innerHTML='<img src="'+p.img+'" alt="'+p.name+'" loading="lazy"><div class="cap"><b>'+p.name+'</b><span>'+p.role+'</span></div>'
    grid.appendChild(div)
  })
  const lb=document.getElementById('lb'),img=lb?.querySelector('img'),name=lb?.querySelector('.meta b'),role=lb?.querySelector('.meta span')
  if(!lb)return
  grid.addEventListener('click',(e)=>{
    const pf=e.target.closest('.pf')
    if(!pf)return
    const i=Array.from(grid.children).indexOf(pf)
    const d=portfolio[i];if(!d)return
    img.src=d.img;img.alt=d.name
    name.textContent=d.name;role.textContent=d.role
    lb.classList.add('open');document.body.style.overflow='hidden'
  })
  lb.addEventListener('click',()=>{lb.classList.remove('open');document.body.style.overflow=''})
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){lb.classList.remove('open');document.body.style.overflow=''}})
}

/* --- testimonial slider --- */
function initTestimonials(){
  const track=document.getElementById('testTrack')
  const prev=document.getElementById('testPrev')
  const next=document.getElementById('testNext')
  if(!track||!prev||!next)return
  let offset=0
  function getStep(){
    const card=track.querySelector('.test-card')
    if(!card)return 0
    return card.offsetWidth+20
  }
  function maxOffset(){
    return Math.max(0,track.scrollWidth-track.parentElement.offsetWidth)
  }
  next.addEventListener('click',()=>{
    offset=Math.min(offset+getStep(),maxOffset())
    track.style.transform='translateX(-'+offset+'px)'
  })
  prev.addEventListener('click',()=>{
    offset=Math.max(offset-getStep(),0)
    track.style.transform='translateX(-'+offset+'px)'
  })
}

/* --- contact form --- */
function initForm(){
  const form=document.getElementById('contactForm')
  if(!form)return
  form.addEventListener('submit',function(e){
    e.preventDefault()
    const msg=document.getElementById('formMsg')
    if(msg){msg.textContent='Thanks! We will reach out via WhatsApp or email soon.';msg.style.display='block'}
    form.reset()
  })
}

/* --- init --- */
document.addEventListener('DOMContentLoaded',function(){
  initSlider()
  initMenu()
  initReveal()
  initCounters()
  initPortfolio()
  initTestimonials()
  initForm()
})

})()
