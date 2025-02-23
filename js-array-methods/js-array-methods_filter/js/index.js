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
    tags: ["js", "next"],
  },
];

// Bei Filter ist entscheidend, was in der klammer steht, man definiert hier die sachen, die man haben möchte (return braucht man hierbei nicht, weil das Ergebnis(neues Array wird innerhalb der Variable "onlyCardWithIdTwo" usw gespeichert und kann weiterverwendet werden


const onlyCardWithIdTwo = cards.filter(card => card.id === "2");          // Der Filter geht durch jedes Element des Arrays (Cards), card ist ein frei gewählter Parameter und repräsentiert das aktuelle Element (das einzelne Objekt im Array. Sobald man card hat, kann man auf die Eigenschaften wie id etc zugreifen mit card gibt man dem einzelnen objekt des arrays einfach nur einen namen!

console.log(onlyCardWithIdTwo);
 

const allCardsWith3Tags = cards.filter(card => card.tags.lenght === 3 );     // Alle die 3 tags haben werden rausgefiltert

console.log(allCardsWith3Tags);



const allCardsThatAreNotBookmarked = cards.filter(card => card.isBookmarked !== true);         // so werden alle die Card, die bookmarked=false haben, gefiltert. 

console.log(allCardsThatAreNotBookmarked);



const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(card => (card.tags.includes("html") || card.tags.includes("js")) && card.isBookmarked );  // Es muss entweder das erste oder das zweite stimmen (||), aber auf jeden fall muss es bookmarked sein (&&)

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked );



export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
