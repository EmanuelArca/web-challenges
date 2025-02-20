console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
  
  for (const ItemOfArray of programmingLanguages) {    // Alle Elemente aus dem Array werden von oben nach unten durchlaufen, Loop wird erstellt
    const li = document.createElement("li")    // Neue Variable li erstellen und speichern um sie weiter zu verwenden, durch createElement wird "li" hinzugefügt
    ol.append(li);    // dem ol element wird ein neues li hinzugefügt für jeden Durchlauf der Schleife
    li.textContent = "Programmiersprache:" + ItemOfArray;    // Für jedes hinzugefügte li wird der Name mit ausgegeben der einzelnen Items im Array
    
    // alternativ geht auch  li.textContent = `Programmiersprache: ${[ItemofArray]}`;
}

// --^-- write or modify code above this line --^--
