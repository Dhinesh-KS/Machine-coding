let counter = 0;

const input = document.getElementById("counter-input");
const counterResult = document.getElementById("counter-result");
const counterButtonContainer = document.querySelector(".counter-btn-row");
const resetButton = document.getElementById("counter-reset-btn");

function updateCounterDisplay() {
  counterResult.textContent = counter;
}

function getInputValue() {
  const inputValue = parseInt(input.value, 10);
  return isNaN(inputValue) ? 1 : inputValue; // Default to 1 if input is invalid
}

counterButtonContainer.addEventListener("click", (e) => {
  const targetElement = e.target.id;
  const incrementValue = getInputValue();

  if (targetElement === "counter-increment-btn") {
    counter += incrementValue;
  } else if (targetElement === "counter-decrement-btn") {
    counter -= incrementValue;
  }

  updateCounterDisplay();
});

resetButton.addEventListener("click", () => {
  counter = 0;
  updateCounterDisplay();
});

updateCounterDisplay();
