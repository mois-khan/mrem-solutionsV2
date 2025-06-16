const searchInput = document.getElementById('searchInput');
const toolCards = document.querySelectorAll('.tool-card');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  toolCards.forEach(card => {
    const keywords = card.dataset.keywords.toLowerCase();
    card.style.display = keywords.includes(query) ? 'block' : 'none';
  });
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
 