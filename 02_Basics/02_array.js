const marvel_heros = ['thor','ironman','spidy']
const dc_heros=['superman','batman']

//merging two arrays
/**
 * basically there are three ways todo so
 * 1. push
 * 2. concat
 * 3. drop/spread
 */

let all_heros = [];

all_heros = marvel_heros.concat(dc_heros)

console.log(`concat : ${all_heros}`);

all_heros = [...dc_heros,...marvel_heros]
//above used spread to join two arrays!
console.log("spread :"+all_heros);
// Dont use push or concat for combining two arrays
/**
 * as push will add the other array as an element ie nested array kinda
 * push preforms operation on original array where as concat returns new array,
 * it can be used but please dont use better to use spread!!
 */
const another_array =[1,2,3,[4,5,6],7]
//  How to sub-arry to array 
const elementToArray=another_array.flat(Infinity);
console.log(elementToArray);

// Ask if something is array or not?
console.log(Array.isArray("Mango"));
// convert anything to an array
console.log(Array.from("String"));
console.log(Array.from({uName:"Raj",uAge:23, uTest:false}));
//above one returns empty array
const newUser = {
    uName:"Rama",
    uAge:23,
    uTest:true
}
//this will return array of object keys
console.log(Array.from(Object.keys(newUser)));

// How to create an array of variables?
let uName="Mohan"; 
city='Pune'
score=100

console.log(Array.of(uName,city,score));
//Done!


