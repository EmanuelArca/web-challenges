console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
    console.log("Welcome! You are logged in.");
 } else { console.log ("Access denied!");

} 


// Part 2: Even / Odd
const number = 5;

if (number % 2 === 0){
    console.log("gerade Zahl, even");
} else { console.log ("ungerade Zahl,odd");
    
}

// Part 3: Hotdogs
const numberOfHotdogs = 100000;
if (numberOfHotdogs < 5 ){
    console.log(numberOfHotdogs * 2);
} else if (numberOfHotdogs < 100){
    console.log(numberOfHotdogs * 1,5);
} else if (numberOfHotdogs < 1000000) {
    console.log(numberOfHotdogs * 1);
} else { console.log(numberOfHotdogs * 0,1);
}



// Part 4: Daytime
const currentHour = 18;

const statement = currentHour < 17? "Still need to learn..." : "Partytime!!!";

console.log(statement);




// Part 5: Greeting
const userName = "Archibald";
const coachName = "Archibald";

const greeting = (userName === coachName ? "Hello Coach!" : `Hello ${userName}!`);

console.log(greeting);
