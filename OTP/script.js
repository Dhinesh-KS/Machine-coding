const otpInputRow = document.getElementById("otp-input-row");
const NUMBER_OF_INPUTS = 6;
const otpFields = [];

function init() {
  for (let i = 0; i < NUMBER_OF_INPUTS; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.inputMode = "numeric";
    input.maxLength = 1;
    input.classList.add("otp-input");
    otpInputRow.appendChild(input);
    otpFields.push(input);
  }
}

const isDigit = (value) => {
  return !isNaN(value) && Number(value).toString() === value;
};

otpInputRow.addEventListener("input", (e) => {
  if (!isDigit(e.target.value)) return (e.target.value = "");
  if (e.target.value === "") return;
  const next = e.target.nextElementSibling;
  if (next) next.focus();
});

otpInputRow.addEventListener("keyup", (e) => {
  const key = e.key.toLowerCase();
  if (key === "backspace" || key === "delete") {
    const prev = e.target.previousElementSibling;
    if (prev) prev.focus();
  }
});

otpInputRow.addEventListener("paste", (e) => {
  const content = e.clipboardData.getData("Text");
  if (
    typeof content === "string" &&
    content.length === otpFields.length &&
    isDigit(content)
  ) {
    otpFields.forEach((field, i) => {
      field.value = content.charAt(i);
    });
  }
});

init();
