const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',


// 換圖輪播js
  loop: true,
  sliderPerview:'auto',
  spaceBetween:30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// js & jquery可以放在一起

// jquery UI tabs
