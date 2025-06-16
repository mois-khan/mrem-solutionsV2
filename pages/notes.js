const searchBox = document.getElementById("searchBox");
const noteCards = document.querySelectorAll(".note-card");

searchBox.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  let firstVisible = null;

  noteCards.forEach(card => {
    const keywords = card.getAttribute("data-keywords").toLowerCase();
    const parentAnchor = card.closest("a"); // gets the <a> wrapping it

    if (keywords.includes(query)) {
      parentAnchor.style.display = "block";
      if (!firstVisible) {
        firstVisible = parentAnchor;
      }
    } else {
      parentAnchor.style.display = "none";
    }
  });

  // scroll to the first matching anchor
  if (firstVisible) {
    firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});




// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("navLinks");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("show");
// });


const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
 