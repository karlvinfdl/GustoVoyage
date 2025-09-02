/* =======================================================
          🌟   Voyages selon vos envies   🌟
  ------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const leftArrow = document.querySelector('.slider-arrow1__destinations.left__destinations');
  const rightArrow = document.querySelector('.slider-arrow1__destinations.right__destinations');

  if (!carousel || !leftArrow || !rightArrow) return; // sécurité

  const gap = 15; // le gap défini dans ton CSS
  const itemWidth = carousel.querySelector('.carousel-item__destinations').offsetWidth;
  const scrollAmount = itemWidth + gap;

  leftArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
/* =======================================================
          🌟   Voyages selon vos envies  🌟
  ------------------------------------------------------- */


/* =======================================================
          🌟   Nos voyages incontournables   🌟
  ------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.cards__destinations');
  const leftArrow = document.querySelector('.slider-arrow__destinations.left__destinations');
  const rightArrow = document.querySelector('.slider-arrow__destinations.right__destinations');

  if (!sliderContainer || !leftArrow || !rightArrow) return; // sécurité

  const gap = 15; // ajuster si tu as un gap CSS différent
  const cardWidth = sliderContainer.querySelector('.card__destinations').offsetWidth;
  const scrollAmount = cardWidth + gap;

  leftArrow.addEventListener('click', () => {
    sliderContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
/* =======================================================
          🌟   Nos voyages incontournables   🌟
  ------------------------------------------------------- */