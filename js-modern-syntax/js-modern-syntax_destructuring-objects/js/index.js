console.clear();

/*
EXERCISE 1
Extract only the course name from the `company` object.
Make sure to export your variable as shown in the example below for the tests to work.
*/

const company = {
  name: "TechAcademy",
  course: "Web Development",
  location: "Hamburg",
};

const { course } = company;      // destructured, um auf course zuzugreifen

console.log(course);            // hiermit testen ob es klappt, er loggt "web development" aus

// Example: export const { value1 } = myObject;

/*
EXERCISE 2
We have an object called `user`.
Use destructuring to extract the following:
 2.1: The `name` property into a variable `name`.
 2.2: The `years` property into a variable `age`.
 2.3: The `isAdmin` property into the variable `isAdmin`.
      Set a default value of `false` if `isAdmin` is not present.
*/

const user = { 
  name: "John", 
  years: 30 
};

const { name } = user;            // name bleibt gleich
const { years: age } = user;       // durch :age wird es umbenannt
const { isAdmin = false } = user;  // durch =false wird die neue isAdmin hinzugefügt, sie existiert vorher nicht  

console.log(name);                 // als test. bei age drauf achten dass man nicht years trotzdem eingibt, es wurde ja geändert
console.log(age);
console.log(isAdmin);


/*
EXERCISE 3
Extract properties from the dog object and
rename them as `dogName`, `dogBreed`, and `dogAge`, respectively.
*/

const dog = {
  name: "Pluto",
  breed: "husky",
  age: 5,
};

const { name: dogName } = dog;      // das =dog steht weil so das objekt heisst und alles darin neu gespeichert wird, die veränderten keys 
const { breed: dogBreed } = dog;  
const { age: dogAge } = dog;  

console.log(dogName)
console.log(dogBreed)
console.log(dogAge)

/*
EXERCISE 4
Extract the `lastName` property from the `person` object as `personLastName`.
Store all other properties in an object called `moreInformation`.
*/

const person = {
  lastName: "Main",
  age: 24,
  firstName: "Alex",
};

const { lastName: personLastName, ...moreInformation} = person;    // last name wird zu personLastName geändert, ...moreInformation erstellt mit dem Rest ein neues Objekt mit diesem Namen

console.log(personLastName);                          // hier wird beides ausgeloggt als Test
console.log(moreInformation);

/*
EXERCISE 5
Refactor the following function to use destructuring assignment for the
three variables `name`, `country` and `numPeople`.
Hint: You may need to rename one property during destructuring.
*/

export function logInfo(city) {          // PARAMETER der innerhalb der Funktion verwendet wird immer wieder
  //const name = city.name;
  //const country = city.country;
  // const numPeople = city.population;           // !hier heisst es nicht population=city.population, sondern numPeople=city.population, daher solle es beim destructuren auch umbenannt und einheitlich sein 
  
  const { name, country, population: numPeople} = city;        // mit : umbenennen       // hier muss der Parameter eingegeben werdenn nicht logInfo!
  return `${name} is in ${country} and has ${numPeople} inhabitants in it.`;     // hier wird dann unten das mit Marseille, France etc ausgegeben, des werden Werte in die Funktion eingetragen, die mann geschrieben hat.

}
  // Hier unten die Werte die dann durch die Funktion laufen und das Ergebnis liefern.
// Usage example:
console.log(
  logInfo({ name: "Marseille", country: "France", population: 861635 })          // hier werden die werte eingegeben in die function, die aufgerufen wird
);
