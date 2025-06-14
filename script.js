
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.onclick = () => {
    navMenu.classList.toggle('active');
    navToggle.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
  };

  // Optional: Reset nav on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 600) {
      navMenu.classList.remove('active');
      navToggle.textContent = '☰';
    }
  });
