const header= document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classlist.toggle("sticky",window.scrollY>80)
});

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick= ()=> {
    menu.classlist.toggle('bx-x')
    navlist.classlist.toggle('open')
}


window.onscroll=()=>{
    menu.classlist.remove('bx-x')
    navlist.classlist.remove('open')
}
const sr=ScrollReveal({
  origint:"top",
  distance:"85px",
  duration:2500,
  reset:true
})
