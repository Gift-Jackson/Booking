const menuBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

menuBtn.onclick = ()=>{
    nav.classList.toggle("active");
}