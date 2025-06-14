const searchBox = document.getElementById("searchBox");
const noteCards = document.querySelectorAll(".note-card");

searchBox.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  noteCards.forEach(card => {
    const keywords = card.getAttribute("data-keywords").toLowerCase();
    if (keywords.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("navLinks");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("show");
// });

document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('show');
});
