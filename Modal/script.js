const showModal = document.querySelector(".show-modal-btn");
const closeModal = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModalFn = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalFn = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

showModal.addEventListener("click", openModalFn);

closeModal.addEventListener("click", closeModalFn);

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && !modal.classList.contains("hidden")) {
    closeModalFn();
  }
});
