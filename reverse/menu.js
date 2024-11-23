const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  spaceBetween: 5,
  coverflowEffect: {
    rotate: 15,
    depth: 5,
    modifier: 1,
    scale: 0.9,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".navigate-right",
    prevEl: ".navigate-left",
  },
  // Ekran boyutlarına göre kaydırıcı özellikleri
  breakpoints: {
    // Büyük ekranlar
    769: {
      slidesPerView: 3,
    },
    // Küçük ekranlar
    0: {
      slidesPerView: 1,
    },
  },
});

  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");
    const body = document.body;
    
    
    menuToggle.addEventListener("click", () => {
      // Menü görünürlüğünü değiştir
      document.querySelector('header').style.visibility = 'hidden';
      document.querySelector('body .title, body .swiper.mySwiper').style.visibility = 'hidden';
      menu.classList.toggle("open");
  
      // Menü açıkken geri kalan içeriği gizle
      if (menu.classList.contains("open")) {
        body.style.overflow = "hidden"; // Sayfanın kaydırılmasını durdur
        
      } else {
        body.style.overflow = ""; // Kaydırmayı geri getir
      }
    });

    
    const closeMenuButton = document.getElementById("menu-close");
    closeMenuButton.addEventListener("click", () => {
      document.querySelector('body .title, body .swiper.mySwiper').style.visibility = 'visible';

  document.querySelector('header').style.visibility = 'visible';
  menu.classList.remove("open");
  body.style.overflow = "";
});

  });



  
  