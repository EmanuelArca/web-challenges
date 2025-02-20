console.clear();

let number = Math.random(); // Number wird auf Zufallszahl gesetzt mit Math.random, aber nur einmal zu Beginn
let count = 0;  // Zähler der sich um 1 erhöhen soll für jede 

// --v-- write or modify code below this line --v--

while (number <= 0.9) { // Schleife läuft, solange die Zahl kleiner oder gleich 0,9 ist 
console.log(number); // Die Random Zahlen werden eingeloggt
count++; // Count erhält für jede Runde/Durchlauf (Iteration) ein +1, es erhöht sich um 1 
console.log(count); // Count wird eingeloggt, nachdem er erhöht wurde
number = Math.random(); // Hiermit wird es innerhalb der Schleife immer wieder aufgerufen, damit jedes mal erneut eine Zufallszahl generiert wird
}


// --^-- write or modify code above this line --^--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
  // Das würde auch gehen: console.log("The number that ended the loop was " + number + " and it took " + count + " rounds to do this!");
);

