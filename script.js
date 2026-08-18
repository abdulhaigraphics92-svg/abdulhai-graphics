const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();


// Automatic image slider: 3.5 seconds, arrows, dots and touch swipe.
const slides=[...document.querySelectorAll('.slide')];
const dots=[...document.querySelectorAll('.dot')];
const prev=document.getElementById('prevSlide');
const next=document.getElementById('nextSlide');
const slider=document.getElementById('serviceSlider');
let current=0,timer;
function showSlide(i){current=(i+slides.length)%slides.length;slides.forEach((x,n)=>x.classList.toggle('active',n===current));dots.forEach((x,n)=>x.classList.toggle('active',n===current));}
function startAuto(){clearInterval(timer);timer=setInterval(()=>showSlide(current+1),3500)}
function pauseAuto(){clearInterval(timer)}
next.addEventListener('click',()=>{showSlide(current+1);startAuto()});
prev.addEventListener('click',()=>{showSlide(current-1);startAuto()});
dots.forEach((d,i)=>d.addEventListener('click',()=>{showSlide(i);startAuto()}));
slider.addEventListener('mouseenter',pauseAuto);slider.addEventListener('mouseleave',startAuto);
let touchStart=0;slider.addEventListener('touchstart',e=>{touchStart=e.changedTouches[0].screenX;pauseAuto},{passive:true});slider.addEventListener('touchend',e=>{let diff=e.changedTouches[0].screenX-touchStart;if(Math.abs(diff)>45)showSlide(current+(diff<0?1:-1));startAuto()},{passive:true});
showSlide(0);startAuto();
