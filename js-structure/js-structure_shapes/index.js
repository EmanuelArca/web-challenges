console.clear();

// KLAPPT NOCH NICHT !!


// Alle Elemente importieren aus den einzelnen Components: 

import Circle from "./components/Circle/Circle";
import Square from "./components/Square/square";
import Pentagon from "./components/Pentagon/pentagon";

const root = document.getElementById("root");   // hier wird nach dem HTML dokument mit id=root gesucht, es wird der Container sein, in dem die 3 FOrmen eingefügt werden.


const circleElement = Circle();               // hier werden die importierten Funktionen aufgerufen und diese geben ein neues HTML Element zurück (Die Formen). Es ist noch nicht hinzugefügt, nur erstellt. Es kann weiterverwendet werden.
const squareElement = Square();
const pentagonElement = Pentagon();


root.append(circleElement, squareElement, pentagonElement);    // hier werden die Formen hinzugefügt und auf der Seite angezeigt.



//  import {getRandomColor} from "./utils/randomColor.js";   // Hier den Namen der Funktion eintragen in die Klammern, nicht "function" also Wort eintragen!

// const root = document.getElementById("root");


// Alles in grün hier drunter und darüber mal drin gelassen, braucht man nicht mehr weil für jedes Element eine eigene function erstellt wurde mit eigener components seite.


//const circle = document.createElement("div");
// circle.classList.add("circle");
// circle.addEventListener("click", () => {
//  circle.style.backgroundColor = getRandomColor();  // GETRANDOM COLOR HIER EINSETZEN circle.style.backgroundcolor =getrandomcolor(); die funktion ist in der randomColor.js gespeichert. man kann also eine ganze funktion als farbe einsetzen!
// });


 // const square = document.createElement("div");
// square.classList.add("square");
 // square.addEventListener("click", () => {
 // square.style.backgroundColor = getRandomColor();   // Hier auch 
// });

// const pentagon = document.createElement("div");
// pentagon.classList.add("pentagon");
// pentagon.addEventListener("click", () => {
//   pentagon.style.backgroundColor = getRandomColor();  // Hier auch 
// });

// root.append(circle, square, pentagon);
