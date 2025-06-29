const container = document.querySelector('.carousel__container');
const wrapper = document.querySelector('.carousel-track-wrapper');
const cards = document.querySelectorAll('.carousel__container .card');
const prevBtn = document.querySelector('.carousel__button.prev');
const nextBtn = document.querySelector('.carousel__button.next');
const pageIndicator = document.querySelector('.current_page .genre');

const cardsPerPage = 2;
const totalPages = Math.ceil(cards.length / cardsPerPage);

let currentPage = 0;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  const gap = 16;
  const moveX = (cardWidth + gap) * cardsPerPage * currentPage;
  container.style.transform = `translateX(-${moveX}px)`;
  pageIndicator.textContent = `${currentPage + 1}`;
}

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
  } else {
    currentPage = 0; 
  }
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
  } else {
    currentPage = totalPages - 1; 
  }
  updateCarousel();
});

updateCarousel();
