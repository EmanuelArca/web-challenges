console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const switchcaseButton = document.querySelector('[data-js="button-switchcase"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  secondInput.value = secondInput.value.toLowerCase();
});

switchcaseButton.addEventListener("click", () => {
  const firstValue = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = firstValue;
});

