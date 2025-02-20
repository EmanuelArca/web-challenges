console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
console.log("Formular abgeschickt"); // Nur als Test ob es funktioniert
});

const formElement = event.target;

const formData = new FormData(event.target);
const data = Object.fromEntries(formData);


event.target.reset();
event.target.elements.message.focus();

