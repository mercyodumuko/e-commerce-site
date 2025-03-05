const menuBnt = document.getElementById("menu-bnt");
const navLinks = document.getElementById("nav-links");
const menuBntIcon = menuBnt.querySelector("i");

menuBnt.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

   const isOpen = navLinks.classList.contains("open") ;
   menuBntIcon.setAttribute("class" , isOpen ? "fa fa-close" : "fa fa-bars")
});


navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBntIcon.setAttribute("class" ,  "fa fa-bars")
});


const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
    navSearch.classList.toggle("openn")
})

ScrollReveal({
   reset: true,
   distance: "60px",
   duration: 2500,
   delay: 400
  });

  ScrollReveal().reveal('.inner-box, .top', { delay: 500, origin: "left"});
  ScrollReveal().reveal('.text, .form', { delay: 500, origin: "bottom"});
  ScrollReveal().reveal('.deals-card, .about-card' , { interval: 600, origin: "bottom"});
  ScrollReveal().reveal('.section-header', { delay: 500, origin: "left"});
  ScrollReveal().reveal('.section-naration, .text2, .italic' , { delay: 600, origin: "bottom"});
  ScrollReveal().reveal('.img7', { delay: 500, origin: "bottom"});
  ScrollReveal().reveal('.second-box', { delay: 500, origin: "right"});
 



