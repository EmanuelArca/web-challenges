console.clear();

const inputElement = document.querySelector('[data-js="first-input"]');
const lowerCaseButton = document.querySelector('[data-js="button-lowercase"]');

lowerCaseButton.addEventListener("click", () => {
  inputElement.value = inputElement.value.toLowerCase();
});
