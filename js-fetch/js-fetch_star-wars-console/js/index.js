console.clear();

const url = "https://swapi.py4e.com/api/people";             // Variable wird außerhalb der function deklariert

async function fetchData() {                                  // hier wird die function geschrieben
    const response = await fetch(url);                         // const response angelegt, da die url vorher festgelegt wurde, kannn man sie hinter fetch in die klammern schreiben und dann hat die response zugriff darauf, sie ruft die sachen aus der http auf.
    const data = await response.json();                       // data wird als variable vergeben, weil dort wird die Antwort gespeichert, die zuvor in JSON umgewandelt wurde.

 // return data;       wenn man die Daten weiterverarbeiten möchte, muss man erst return setzen. Es wurd zurückgegeben
 // fetchData().then(data => {console.log(data) })      Hier der Schritt ist erforderlich. um es weiterzuverarbeiten.     


console.log(data);           // Gesamtes Datenobjekt ausgeben          // Json Daten in der Konsole ausgeben
// console.log(data.results);  das geht auch 
}

fetchData();


// Verschiedene Werte  des Datenobjekts ausgeben   !! müsste damit der console.log klappt direkt in der funktion ausgeführt werden, sonst kein zugriff auf Data, darunter genau so bei R2D2

console.log(data.results[1]);         // data vorher festgelegt, results steht so im array. hier würde man auf die zweite Person des Array zugreifen



// Augenfarbe R2D2 ausgeben

console.log(data.results[2].eye_color);   // R2D2 befindet sich im dritten Array, und seine eugenfarbe steht dort unter eye_color