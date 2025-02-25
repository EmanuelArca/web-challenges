console.clear();

/*
EXERCISE 1
a) Destructure the `person` object and extract the variables `age` and `contact`.
b) Use the rest parameter to collect the values of `name`, `email`, and `phone`
   and put them into `contact`.
c) Make sure to export your variable as shown in the example below to make the tests work.
*/

const person = {
  name: "Jane Doe",
  age: 32,
  email: "jane@doe.com",
  phone: "12345",
};

const {age, ...contact} = person;              // age wird einzeln ausgegeben, und die restlichen werden in contact gespeichert!

console.log(age);                       // age einzeln ausloggen
console.log(contact);                   // die in  contact gespeicherten restlichen dinge ausloggen



// Example: export const { value 1 } = myObject;

/*
EXERCISE 2
Use array destructuring to extract the variables `first` and `second`;
all other items should go into a variable called `restOfList`.
*/

const list = ["one", "two", "three", "four", "five"];

const [first, second, ...restOfList] = list;

console.log(first);
console.log(first);
console.log(restOfList);



/*
EXERCISE 3
a) The `add` function does not work because it needs an array as an argument.
b) Use the rest syntax with the `allNumbers` parameter to fix it.
c) Make sure you understand what the rest syntax does here.
d) Note that the optional chaining `?.` is used to prevent an error from occuring.
*/

function add(...allNumbers) {                                       // ...allnumbers rein schreiben und das arrays wird aus den zahlen unten hineingegeben
  return allNumbers.reduce?.((a, b) => a + b);                     // summiert alle Werte im Array, wenn es vorhanden ist.  // optionale Verkettung sorgt dafür, dass die Methode reduce() nur aufgerufen wird, wenn allNumbers tatsächlich ein Array ist und die Methode reduce existiert.
}

export const sum = add(3, 2, 3, 2, 1, 2, 3, 4);

console.log(sum);            // zahlen werden zusammengezählt, ergebnis 20


/*
EXERCISE 4
a) Below, the `add` function is called with an array as an argument.
b) Use the spread syntax with the `numbers` argument to fix this.
c) Make sure you understand what the spread syntax does here.
*/

// hier wird die Funktion von oben anders ausgeführt:

const numbers = [3, 2, 1];             
export const result = add(...numbers);          //  add(numbers); so stand es als Ausgangssituation   // spread wird angewendet, dass array wird entpackt und in seine einzelnen Werte zerlegt. 
                                                // anders geschrieben: add(3, 2, 1 ) wird daraus. 

console.log(result);

// Zahlen werden wieder zusammengezählt. Ergebnis: 6


/*
EXERCISE 5
a) Create a variable `allFruits` which combines `anotherFruit` and `fruits`
   into a single array (in this order).
b) Use the spread syntax to achieve this.
c) Remember to export `allFruits`.
*/

const fruits = ["apple", "banana", "orange", "papaya"];
const anotherFruit = "cherry";



const allFruits = [anotherFruit, ...fruits];         // anotherFruit enthält ein Element, es wird als erstes eingefügt im neuen Array, fruits enthält mehrere und durch spread werden alle einzeln hinzugefügt
                                                     // bei ...anotherFruit würde das einzelne Wort cherry in c h e r r y zerlegt , in einzelne Buchstaben!
console.log(allFruits);