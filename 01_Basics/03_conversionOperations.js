
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
