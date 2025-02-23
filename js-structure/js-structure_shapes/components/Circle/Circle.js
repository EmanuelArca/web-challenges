import { getRandomColor } from "../../utils/randomColor";  // das muss von randomColor.js importiert werden, damit die Farbe noch funktioniert

 export default function Circle() {                       // export default kann man nur ein mal nutzen, das ist das Hauptelement, bei index.js muss man dann den import setzen!
    const circle = document.createElement("div");          //   //function wird erstellt, eine Fabrik die den circle samt random Color erstellt
    circle.classList.add("circle");
    circle.addEventListener("click", () => {
      let color = getRandomColor();
      circle.style.backgroundColor = color;
    });
  
    return circle;

    }