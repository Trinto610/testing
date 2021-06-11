const menu=document.getElementById('nav-menu');
const ul=document.querySelector('.navbar-ull');
const l1=document.querySelector('.line1');
const l2=document.querySelector('.line2');
const l3=document.querySelector('.line3');
const navLinks=document.querySelectorAll('.navbar-lii');
const ac11=document.querySelector('.ac11');
const ac22=document.querySelector('.ac22');
const ac33=document.querySelector('.ac33');
const nature=document.querySelector('.nature');

menu.addEventListener('click',function(){
 ul.classList.toggle('nav-active');
 l1.classList.toggle('nav-menu1');  
 l2.classList.toggle('nav-menu2');
 l3.classList.toggle('nav-menu3');
  
 navLinks.forEach((link, index)=>{
    if(link.style.animation){
      link.style.animation='';
    }
    else{
    link.style.animation=`navFade 1s ease forwards ${index/4}s`;
  }
 });
});

ac11.onclick=function(){ 
  ul.classList.remove('nav-active');
  l1.classList.toggle('nav-menu1');
  l2.classList.toggle('nav-menu2');
  l3.classList.toggle('nav-menu3');
 
  navLinks.forEach((link, index)=>{
   if(link.style.animation){
     link.style.animation='';
   }
   else{
   link.style.animation=`none`;
 }
});
}

ac22.onclick=function(){ 
  ul.classList.remove('nav-active');
  l1.classList.toggle('nav-menu1');
  l2.classList.toggle('nav-menu2');
  l3.classList.toggle('nav-menu3');
 
  navLinks.forEach((link, index)=>{
   if(link.style.animation){
     link.style.animation='';
   }
   else{
   link.style.animation=`none`;
 }
});
}


ac33.onclick=function(){ 
  ul.classList.remove('nav-active');
  l1.classList.toggle('nav-menu1');
  l2.classList.toggle('nav-menu2');
  l3.classList.toggle('nav-menu3');
 
  navLinks.forEach((link, index)=>{
   if(link.style.animation){
     link.style.animation='';
   }
   else{
   link.style.animation=`none`;
 }
});
}

window.onload=function(e){
 nature.classList.toggle('nature-active');
 e.stopPropagation();
}

