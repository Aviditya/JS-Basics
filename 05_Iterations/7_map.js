// map
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => num + 10);
console.log(newNums);

const newNums2 = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);//true or false

console.log(newNums2);
// map and filter both returns values.

