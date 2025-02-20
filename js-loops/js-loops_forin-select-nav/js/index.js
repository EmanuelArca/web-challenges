console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input  // Das ist ein Element in HTML bei dem man mehrere sachen auswählen kann

const languages = {           // Objects (kein Array)
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");   // ein Select Element wird erstellt (erstmal nur in Javascript)
select.name = "languages";   //  wird nachher in HTML so eingefügt: <select name="languages"</select>
main.append(select);   //  Fügt das Select Element in das bestehende Main Element in HTML ein 


for (const option in languages) {    // for in Schleife erstellen, um durch das languages Objekt durchzugehen, jede einzelne Sprache ist eine Option
  let optionElement = document.createElement("option");   // neue variable, jeder Schleifen Durchgang erstellt eine neue Option und hängt sie im Select Element an 
  optionElement.textContent = languages[option];    // für jede Option wird ein Name gegeben, gleicher name wie beim jeweiligen Land, weil Option jeweils ein Element aus dem Select Element ist (was languages heisst)
  select.append(optionElement);    // an das Select Element wird jeweils für jedes Land eine Option angehängt
}
  
//--------------------------------------------------------------------------------------------------

// Part 2: Creating a Navigation Bar

const nav = {                                               // Object (kein Array)
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");   // hier wird das gesamte Nav Element erstellt
const ul = document.createElement("ul");    // hier wird das ul Element erstellt (Liste)
main.append(navElement);     // hier wird das Nav Element (Nav Bar) im HTML eingefügt
navElement.append(ul);      //  hier wird das Ul Element (innerhalb des Nav Element) im HTML eingefügt

// WICHTIG: hier muss erst das Nav Element hinzugefügt werden, dann innerhalb des Nav Elements das UI Element!


