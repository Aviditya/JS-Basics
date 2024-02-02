// array

const marvel_heros = ['thor','ironman','spidy']
const dc_heros=['superman','batman']

//merging two arrays
/**
 * basically there are three ways todo so
 * 1. push
 * 2. concat
 * 3. drop/scatter
 */

let all_heros = [];

all_heros = marvel_heros.concat(dc_heros)

console.log(`concat : ${all_heros}`);

all_heros = [...dc_heros,...marvel_heros]
console.log("spread :"+all_heros);
// Dont use push or concat for combining two arrays
/**
 * as push will add the other array as an element ie nested array kinda
 * push preforms operation on original array where as concat returns new array,
 * it can be used but please dont use better to use scater!!
 */
const another_array =[1,2,3,[4,5,6],7]
const elementToArray=another_array.flat(Infinity);
console.log(elementToArray);

