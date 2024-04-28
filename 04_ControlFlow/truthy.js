const userEmail=[];

if (userEmail) {
    console.log('Got user mail');
}else {
    console.log('No user mail found');
}

// Falsy values
// false, 0,-0, BigInt 0n, "",null, undefined, NaN

// All others are truesy like
// '0', 'false'," ",[],{},function(){} ie an empty function

// How to check if an array is empty?
if (userEmail.length === 0) {
    console.log('Array is empty');// Array is empty
}

// Similarly for an object.
const emptyObj={};
if (Object.keys(emptyObj).length === 0) {
    console.log(`Object is empty`);
}

// Nullish Coalescing Operator (??) : null undefined

let val1;

val1 = 5 ?? 10 // 5

val1 = null ?? 10 // 10

val1 = undefined ?? 15 // 15
// ?? operator replaces null and undefined

val1 = null ?? 10 ?? 15 // 10
// It takes the first value

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice<= 80 ? console.log('Less than 80'):console.log('More than 80');;

////