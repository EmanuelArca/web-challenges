import { getRandomColor } from "../../utils/randomColor.js";        // muss importiert werden 

export default function Square() {                               //function wird erstellt, eine Fabrik die den square samt random Color erstellt
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    let color = getRandomColor();
    square.style.backgroundColor = color;          
  });

  return square;
}


