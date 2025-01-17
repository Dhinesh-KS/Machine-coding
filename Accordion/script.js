const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.toggle("active");
    const panel = document.querySelector(
      `.accordion-body[data-accordion=${tab.dataset.accordion}]`
    );
    if (panel) {
      // To make an animated accordion
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  });
});
