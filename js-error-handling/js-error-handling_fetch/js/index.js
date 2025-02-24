console.clear();

const actionsElement = document.querySelector("[data-js='actions']");     // Elemente werden aus html geholt
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {       // hier werden Daten von der API abgerufen, url wird einfach als parameter selber festgelegt, um ihn innerhalb der funktion zu verwenden (platzhalter), asynchron
  try {                                   // durch try wird versucht, die sachen abzurufen
    const response = await fetch(url);       // sendet Anfrage and die jeweilige url (unten im array endpoints), await wartet bis Antwort (response) geladen wurde
    
    const contentType  = response.headers.get("content-type");    // dies ist nur bonus für die invalid API Link Aufgabe, hier wird der content-type header aus der Antwort geholt,Der Content-Type gibt an, welches Datenformat die Antwort hat (z. B. application/json für JSON-Daten oder text/html für HTML).

if (!response.ok) {    // das heisst response NICHT okay (!==)     // ist nicht okay, wenn der server 404 Fehler zurückgibt, dann wird der Fehler HTTP error! Status:400 angezeig in der console, er nimmt den Namen aus der response über $!
throw new Error (`HTTP error! Status: ${response.status}`)         // erst muss immer ein Throw Error gemacht werden! bevor man dem user was ausgeben kann. 
}
// Bei User 99 wird jetzt HTTP error! Status: 404 angezeigt 


// Bonus aufgabe mit Invalid API Link

else if (!contentType.includes("application/json")) {          // Falls die Antwort kein json ist, wird ebenfalls ein Fehler geworfen, das verhindert, dass der Code versucht, HTML oder anderes als JSON zu parsen
throw new Error ("Expected JSON response but received: " + contentType);

}

    return await response.json();           // der Code wartet, bis die Anfrage abgeschlossen ist und speichert die Antwort in der Variable response    
  } catch (fehler) {                     // fehler ist nur ein parameter    // wenn es nicht klappt, kommt catch ins spiel und es erscheint die error message, zum beispiel netzwerk fehler oder ungültige url, fehler wird in der variable error gespeichert
    return { error: fehler.message };        // hier wird der fehler abgefangen, fehler.message erhält die fehlermeldung als string 

    }
  }
const endpoints = [                                                 // ein Array aus mehreren Objekten
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {                          // endpoints ist das array. hier wird ein forEach erstellt und (endpoint ist selbst gewählt)
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {                         // das hier stand schon... die Aufgabe wird darüber gelöst daher hier keine weiteren kommentare
    const result = await fetchUserData(endpoint.url);

    if (result.error) {
      errorElement.textContent = result.error;                          // wenn es einen error gibt dann erscheint "no user data available"
      userElement.innerHTML = "No user data available.";
    } else {
      const user = result.data;                                        // ansonsten wird dann alles richtig ausgegeben mit den user daten 
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    }
  });
});
