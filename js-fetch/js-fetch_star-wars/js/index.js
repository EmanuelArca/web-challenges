import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.py4e.com/api/planets/1/",
  films: [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.py4e.com/api/vehicles/14/",
    "https://swapi.py4e.com/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.py4e.com/api/starships/12/",
    "https://swapi.py4e.com/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.py4e.com/api/people/1/",
};

// Create dom element for a card and append it to the root
const firstCard = Card(EXAMPLE_DATA);
renderElement(firstCard);                   // das ist die Vorgehensweise, um eine Card aus dem Array aus der Internetseite herzuholen und dann auch herzustellen und anzuzeigen

fetchDataAndRender();




// --v-- your code below this line --v--


async function fetchDataAndRender() {
  const response = await fetch("https://swapi.py4e.com/api/people");   // Man kann entweder die adresse direkt hier rein schreiben oder vorher eine variable festlegen, zum beispiel url. danach kann man dann nur url in die klammern schreiben
  const data = await response.json();          // hier wird die vorher erstellte Karte auch tatsächlich der Internetseite hinzugefügt und angezeigt

  console.log(data);

// so würde man einzelne karten erstellen

// const card = Card(data.results[0]),   hier wird die erste Karte im Array erstellt. 

// const card2 = Card(data.results[1]),   hier wird die zweite Karte im Array erstellt.               

// um jetzt alle Karten aus dem Array auf einmal herzustellen, kann man forEach nutzen

data.results.forEach((cardData) => {      //data steht weiter oben es ist die antwort aus dem json    // jedes Element aus dem Array wird als cardData an die Callback-Funktion zurückgegeben, cardData ist selbst vergeben, das ist nun der neue Name von jedem Einzelnen Objekt im Array
  const card = Card(cardData);          // hier wird eine neue Variable erstellt, es ist die neue Karte und diese erhält dann jeweils die Daten die aus cardData übertragen werden.
renderElement(card);                    // hier wird dann die Karte tatsächlich hinzugefügt, und zwar durch forEach für jedes einzelne Objekt im Array, es erscheinen alle Karten gleichzeitig auf der Internetseite

});

}     
