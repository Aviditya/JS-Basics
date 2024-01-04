const fname = 'utpal'
const repos = 10

console.log(fname + repos + " Values");

// String interpolation ${fname} in backticks ``

console.log(`The user name is ${fname}`);

// Another way to delcarre string

const gameName = new String("AV-Life");

console.log(fname.length);
console.log(gameName.slice(0,2));
// Just like slice there are many methods.
console.log(gameName.length);

/**
 * Strings are very powerful and must be mastered!
 */

// Sure, here are some of the most frequently used string methods in JavaScript with examples:

// 1. **charAt()**: This method returns the character at the specified index of a string. For example, 
let str = "Hello World"; console.log(str.charAt(1));
// will output `e` ¹.

// 2. **concat()**: This method concatenates two or more strings and returns a new string. For example, 
let str1 = "Hello"; let str2 = "World"; console.log(str1.concat(" ", str2));
//  will output `Hello World` ¹.

// 3. **includes()**: This method checks whether a string contains the specified substring and returns a boolean value. For example, 
let str = "Hello World"; console.log(str.includes("World"))
// will output `true` ¹.

console.log(str.indexOf("World"))
console.log(str.lastIndexOf("l"));
console.log(str.replace("World","Universe"))
console.log(str.slice(0,5));
console.log(str.split(" "));
console.log(fname.toUpperCase());
// Slice can be used to convert string to an array!

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
