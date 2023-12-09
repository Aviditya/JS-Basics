
let userName = 'Aviditya'
let userAge='23yrs';
let userCity='Pune'
let userJob=false
let skills=null
let works=undefined

let stringAge=String(userAge);
console.log(stringAge);
console.log(typeof(stringAge));

let numberAge = Number(userAge);
console.log(numberAge); //the value is NaN as it's not a number
console.log(typeof numberAge);//tho the conversion works

/**
 * Similarly for stings and boolens
 * Numbers can be converted into strings
 * Boolens -> 1 true 0 false; and "" false "data" true
 * when data is fetched from somewhere it must be checked it can be converted or not for in case of user age
 * as it gets convereted but doesn't print it as it is NaN
 */

// ------------------- Operations ------------------------------//
console.log("----------------------Operations-------------------");
console.log(2+2);//aise simple wale toh u know na hmm

console.log("1"+1+1);
console.log(1+1+"1");
/**
 * Difference ye hai ki jo type pahle hoga vo aiega number pahle toh usko opertaion karenge nahi toh concat karenge easy.
 * Don't write confusing code in prod!
 * Ref. MDN (mozilla ka doc ) for prefix and postfix
 */

// let a,b,c;
// a=b=c=4+5
//Don't do that
let gamePoints=100
gamePoints++ //aisa bhi nahi karna hai ok in prod hm
// console.log(a,b,c);
