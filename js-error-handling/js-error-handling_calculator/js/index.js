console.clear();

const form = document.querySelector("form");        // form wird aus html geholt
const output = form.querySelector("output");        // output wird aus form geholt, form.queryselector!

const operations = {
  add: (a, b) => a + b,                             // 
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {                         // dieser wert Error ist ein von Javascript eingebauter Konstructor!
      throw new Error("Man kann keine Zahl durch 0 dividieren!");         // falls b = 0 eingegeben wird, wird die fehlermeldung "error" kommen, da man nicht durch 0 teilen kann
    }                                                    // dieser fehler kommt nur in der konsole, dem user wird nichts angezeigt! Das gesamte skript könnte abstürzen
    return a / b;
  },
};

form.addEventListener("submit", (event) => {                                // durch NUMBER (eingebautes JS Objekt, Wrapper klasse) konvertiert string in eine Zahl
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);              // hier wird die eingabe des users aus dem ersten Feld genommen, event.target.firstnumber (weil name="firstnumber" in html) .value gibt den eingegeben wert als String zurück. NUMBER konvertiert in eine Zahl
  const secondNumber = Number(event.target.secondNumber.value);            // hier aus dem dritten Feld
  const operation = event.target.operation.value;                          // hier aus dem zweiten Feld (+ - * / aussuchen) hier wird der Wert des Feldes mit name=""operation" geholt. normalerweise ein <select> feld, radio button oder einfaches textfeld
 
 // hier wird jetzt try/catch gesetzt 
  try {
    output.innerText = operations[operation](firstNumber, secondNumber);   //operations ist das objekt ganz oben, operation enthält ist die Variable, die zum beispiel add, subtract, also man greift damit die eingegebene Sache aus dem gesamten Objekt ab, da werden ja einige aufgezählt
                                                                     // firstNumber, SecondNumber ruft das ganze als Argumente auf, es greift die Zahlen des Users ab, die beim Formular eingegeben wurden.
  } catch (fehler) {                 // fehler wird frei vergeben (wird bestimmt meistens error genannt), platzhalter für "man kann keine Zahl durch 0 dividieren", hier könnte man alles eintragen, auch blablabla

    output.innerText = fehler.message;    // hier wird der Fehler Text von oben in eine Nachricht verfasst und dem User auf der Seite angezeigt.          
  }
 
});
