console.clear();
import {getRandomColor} from "./utils/randomColor.js";   // Hier den Namen der Funktion eintragen in die Klammern, nicht "function" also Wort eintragen!

const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  circle.style.backgroundColor = "#ccc";  // GETRANDOM COLOR HIER EINSETZEN circle.style.backgroundclor =getrandomcolor(); einfügen bei allen 3, das ist die funktioN?
});
 // FÜR ALLE 3 SACHENN DANN MACHEN MIT EXTRA COMPONENTEN ORDNER ANLEGEN UND SO WEITER 
const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = "#ccc";
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = "#ccc";
});

root.append(circle, square, pentagon);


const Formen = document.querySelectorAll
