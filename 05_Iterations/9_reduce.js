// reduce
const myNums = [1, 2, 3, 4];

const myTotal = myNums.reduce((acc, curr) => acc + curr, 10);

console.log(myTotal);
console.log();
const myTotal2 = myNums.reduce((acc, curr) => {
  console.log(`acc: ${acc} & curr: ${curr}`);
  return acc + curr;
}, 10);

console.log(myTotal2);
console.log();
const shoppingCart = [
  { iteamName: "JS course", price: 3999 },
  { iteamName: "CyberSecurity course", price: 999 },
  { iteamName: "DSA course", price: 4999 },
  { iteamName: "Python course", price: 5999 },
  { iteamName: "Java course", price: 1999 },
];

let priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price,0);
console.log(priceToPay);