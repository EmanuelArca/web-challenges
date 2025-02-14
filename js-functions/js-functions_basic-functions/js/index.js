console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/


// --v-- write your code here --v--

const bookTitle = "The Lord of the Javascript";
const author = "Mario";
let rating = 4.2;
let soldCopies = 120;


// --^-- write your code here --^--
console.log(bookTitle);
console.log(author);
console.log(rating);
console.log(soldCopies);

/*
2: Log all variables to the console, for example


Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
soldCopies = 200;
rating = 5.8;

// --^-- write your code here --^--
console.log("Title des Buchs: " + bookTitle);
console.log("Author des Buchs: "  + author);
console.log("Rating des Buchs: " + rating);
console.log("Verkaufte Kopien: " + soldCopies);
/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
function logBookData () {
  console.log("Title des Buchs: " + bookTitle);
  console.log("Author des Buchs: "  + author);
  console.log("Rating des Buchs: " + rating);
  console.log("Verkaufte Kopien: " + soldCopies);
}
// --^-- write your code here --^--

logBookData();



soldCopies = 300;

logBookData();


soldCopies = 1000;

logBookData();

