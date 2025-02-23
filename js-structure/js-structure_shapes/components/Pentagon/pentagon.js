import { getRandomColor } from "../../utils/randomColor.js";    // muss importiert werden 

export default function Pentagon() {                          //function wird erstellt, eine Fabrik die das pentagon samt random Color erstellt
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    let color = getRandomColor();
    pentagon.style.backgroundColor = color;
  });

  return pentagon;
}