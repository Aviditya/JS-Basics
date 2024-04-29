// For of loop

const arr = [1, 2, 2.5, 3, 4, 5, 6];

for (const num of arr) {
  console.log(num);
}
console.log();
const greeting = "Hello World!";

for (const greet of greeting) {
  console.log(`${greet}`);
}

console.log();
//
// Maps
//

// Map is an object which has unique values.

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("USA", "United States of Ameria");

console.log(map);

console.log();

const myGames = {
  game1: "NFS",
  game2: "GTA",
};

for (const [key, value] of map) {
  console.log(key, ":", value);
}
console.log();

// for (const [key,value] of myGames) {
//     console.log(key,':',value); // Object not iterable :D

// }

////
