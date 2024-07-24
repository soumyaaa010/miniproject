 const toggles = document.querySelectorAll(".faq-toggle");

 toggles.forEach((toggle) => {
   toggle.addEventListener("click", () => {
     toggle.parentNode.classList.toggle("active");
   });
 });


const yearEl=document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent= currentYear;



const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click",function(){
  headerEl.classList.toggle("nav-open");
});


