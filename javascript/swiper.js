const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    watchOverflow: "true-for-loop",
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 5000,
        spaceBetween: 30,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
      }
  });