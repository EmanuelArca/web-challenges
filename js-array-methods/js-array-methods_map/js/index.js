console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => {        //callback function, cards ist das gesamte array. card(in klammern) steht für das einzelne Element im Array. Es gibt 3 Karten mit Infos wie Frage,Anwtwort etc. durch map wird für jede Karte der gewünschte Effekt angewand und zurückgegeben. In diesem Fall alles in Kleinbuchstaben ausgeben
  return card.answer.toLowerCase();             // um nur auf die antworten des arrays zuzugreifen, muss man erst card.answer nutzen und dann den Befehl toLowerCase
});                                             // return nicht vergessen um das neu erstellte Array zurückzugeben, das neue Array (mit Kleinbuchstaben) wird in lowerCaseAnswers gespeichert

console.log(lowerCaseAnswers);

// ['as often as you like.', ...]





const questionsAndAnswersTogether = cards.map((card) => {   // das hier bleibt immer gleich und geht durch das gesamte Array, mit der Veränderung des Return kann man aussuchen, was er als neues Array ausspucken soll.
  return `${card.question} - ${card.answer}`;     // Mit dieser Methode kann man sich mehrere Dinge aus dem Array ausgeben lassen, mit Bindestrich dazwischen
  
}); 

console.log(questionsAndAnswersTogether);

// ["How often can I use <header>? - As often as you like.", ...]






const questionAndAnswer = cards.map((card) => {     // das hier bleibt wieder gleich
  return  `question: ${card.question} , answer: ${card.answer}`;      // hier kann man die Wörter INNERHALB der `´ noch hinzufügen und sie werden mit angezeigt. 

});

console.log(questionAndAnswer);
// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]






export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
