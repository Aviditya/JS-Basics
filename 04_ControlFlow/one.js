// if

// if true executes and false doesnt

if (true) {
  console.log("This is true!");
}
// operators to perform checks in if conditions
// <,>,<=,>=,==,!=
// Make sure the code runs when the condition is true.
// === (strict check)this also checks the type, negative sign checking !==

const isUserLoggedIn = true;
const temperature = 40;

if (temperature < 50) {
  console.log("Less than 50");
} else {
  console.log("temperaure is greater than 50");
}

console.log();

//scope

// var is always global, dont use it.

points = 200;

if (points > 100) {
  power = "fly";
  console.log(`User Power : ${power}`);
}
// console.log(`User Power : ${power}`);
// cant be acessed coz its in functional scopt of the if condition not in global scope
points = 100;
if (points < 100) {
  power = "fly";
  console.log(`User Power : ${power}`);
} else {
  console.log("User has no power!");
}

// as u can see above without using let or const the default is let.

console.log();

//
// short hand notation

const balance = 1000;

if (balance > 500) console.log("Test"); //implicit scope - man lo ki hai ()
// if (balance>500) console.log('Test'),console.log('Test2');//dont use this but u can :D

// nested if else

if (balance < 500) {
  console.log("Is less than 500");
} else if (balance < 700) {
  console.log("Is less than 700");
} else if (balance < 900) {
  console.log("Is less than 900");
} else {
  console.log("Is less than 1200");
}

console.log();
const UserLoggedIn = false;
const debitCard = true;

// && amp% is and operator

if (UserLoggedIn && debitCard) {
  console.log("Allow for purchase");
}

guestUser = true;
// or use pipe symbol for or operator
if (UserLoggedIn || guestUser) {
  console.log("Welcome! You can make your purchases.");
}
//...//
