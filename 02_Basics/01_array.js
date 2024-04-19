// array

const myArr = [0,2,4,5,6,8] // array has elements
// array is a datatype which can have any type of elements ie variables or data.
// array is resizable - can add and expand the array
// zero based indexing

const myHero=['perman','hatodi','buzzlighter']

// other way to declare and define an array

const myNewArray = new Array(3,6,9,12)
console.log(myNewArray)

// methods

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

// unshift -- adds element to the first of the array
myArr.unshift(-2)
console.log(myArr);
myArr.shift() // removes the 0th element from the array
console.log(myArr);
// stack, queue, deque - data structures (deque is one which supports stack ie push pop and queuw ie un/shift)

// questions
console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

// Join - binds its and coverts it in string comma seperated!

const newArr = myArr.join()
console.log(newArr);
/**
 * @param newArr String - Method used join to convert the myArr contents to string with comma seperated.
 */

// Slice and Splice
/**
 * Slice(1,4) - in this it takes to vaues ie range and return 1 to 4-1 ie it doesnt iclude the range and it also 
 * doesnt manipulate the original string.
 * Where as splice takes out the range fully from the original arr ie it maniuplates the original arr.
 */

natural = [1,2,3,4,5,6,7,8,9,10]
console.log('original',natural);
fHalf = natural.slice(1,6);
console.log('after slice: ',natural);
sHalf=natural.splice(1,6);
console.log('after splice',natural);
// console.log(natural);
// Array part one compelted!

