let menuBtn = document.querySelector(".menuBtn");
let navList = document.querySelector(".nav-list");

menuBtn.onclick = function(){
  navList.classList.toggle('active');
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-times');
}



// swipper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });