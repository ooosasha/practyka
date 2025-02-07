document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');

  burgerMenu.addEventListener('click', () => {
      nav.classList.toggle('active');
      burgerMenu.classList.toggle('active');
  });
});


  

  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        },
      },
    });
  });


document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    dropdown.querySelector('.dropdown-text').addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });
  });
});

  

