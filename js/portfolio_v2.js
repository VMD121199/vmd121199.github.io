const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

const roles = ['AI Research Engineer.','Computer Vision Researcher.','Deep Learning Engineer.','Blockchain Developer.','Published Author.'];
let ri=0,ci=0,del=false;
const el = document.getElementById('typing-text');
function type(){
  const w=roles[ri];
  if(del){el.textContent=w.substring(0,ci--);if(ci<0){del=false;ri=(ri+1)%roles.length;setTimeout(type,400);return;}}
  else{el.textContent=w.substring(0,ci++);if(ci>w.length){del=true;setTimeout(type,1800);return;}}
  setTimeout(type,del?55:85);
}
setTimeout(type,600);

const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(r=>obs.observe(r));

const barObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.querySelectorAll('.skill-bar-fill').forEach(f=>{f.style.width=f.dataset.width+'%';});
  });
},{threshold:0.3});
document.querySelectorAll('.skills-list').forEach(s=>barObs.observe(s));

function handleSubmit(e){
  e.preventDefault();
  const btn=e.target.querySelector('.form-submit');
  btn.textContent='Sent! ✓';btn.style.background='#0d5c46';
  setTimeout(()=>{btn.textContent='Send Message →';btn.style.background='';e.target.reset();},3000);
}
