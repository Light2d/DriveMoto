const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: -0.8,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const swiperPopular = new Swiper(".mySwiperPopular", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {  
      1186: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });
  

  //=======================

  const burger = document.querySelector('.icon-menu')
  const menu = document.querySelector('.burger__menu')

  burger.addEventListener('click', () => {
    menu.classList.toggle('active')
  })
  
  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
  })