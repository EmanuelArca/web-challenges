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