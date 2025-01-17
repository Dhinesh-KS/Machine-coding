const ratingStarsContainer = document.querySelector(".rating-stars-container");
const stars = document.querySelectorAll(".rating-star");

ratingStarsContainer.addEventListener("click", (e) => {
  stars.forEach((e) => e.classList.remove("filled"));
  const clickedIndex = e.target.dataset.index;
  for (let i = 0; i < clickedIndex; i++) {
    stars[i].classList.add("filled");
  }
  document.querySelector(
    ".rating-value"
  ).textContent = `Rating ${clickedIndex}/5`;
});
