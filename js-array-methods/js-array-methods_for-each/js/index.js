const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

//Array Methode for Each bauen: 

colors.forEach((farbigesFeld) => {      //Funktion schreiben die über forEach ausgeführt wird
  const divElementderFarben = document.createElement ("div");     // neues Div Element erstellen
  divElementderFarben.classList.add("color-box");                // Farbe hinzufügen
  divElementderFarben.style.backgroundColor = farbigesFeld;           // Hintergrundfarbe hinzufügen, hier muss die Variable genommen werden, die den Namen der Funktion trägt
  document.body.append (divElementderFarben);         // Element der seite hinzufügen

});

// neue Function erstellen, um die Farben ein zweites mal zu erstellen

function renderColorBox (farbigesFeld) {      // Hier ist wichtig, dass der Parameter in den Klammern steht, derselbe der auch oben bei forEach festgelegt wurde
  const divElementderFarben = document.createElement ("div"); 
  divElementderFarben.classList.add("color-box"); 
  divElementderFarben.style.backgroundColor = farbigesFeld; 
  document.body.append(divElementderFarben); 
}


// Alles erneut erzeugen, diesmal nur mit forEach und der neu erstellten Function

colors.forEach(renderColorBox);

// ! colors ist der Name des gesamten Arrays, und renderColorBox meine neu erstellte Funktion. Hier wird beides zusammen aufgerufen und somit ist der Code viel kürzer