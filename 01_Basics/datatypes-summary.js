// # Data types
/**
 * There are basically two types of data types
 * 1. Primitives and 2. Non-premitives
 * They are call by ref. and call by value.
 */

//Primitive - Call by value
/**
 * String
 * Number
 * Boolean
 * Null
 * Undefined
 * Symbol
 * BigInt - bigger values.
 */

//JS is dynamically typed lang as we dont need to declare any type of data type when defining a var.

const score = 100
const runRate = 12.2
const isMale =true

//defining a symbol
const id = Symbol('123')
const myid=Symbol(123)

console.log(id,myid);
console.log(id==myid);

const bigNumber = 1236193847394798347n
// Reference Type - Non-primitive
// Array - Objects - Functions

const fruits=["Apple",'Banana','Grapes']
//Object
let myObj = {
    name:"utpal",
    age:22,
}


// Fucntions


function myFunction(){
    return "This is my function"
}

console.log(myFunction());

function MutipleSum(variable){
    return variable=variable*2
}
MutipleSum(100)

const myNewFunction = function(){
    return "My new fucntion";
}
myFunction()
myNewFunction()
console.log(MutipleSum(23));

// Thre are three ways u can do it do anyway :) haha just calling is by log. hmm
console.log(myObj);
console.table([typeof myNewFunction, typeof myObj, typeof bigNumber, typeof score,typeof id])
myArray = ["Here is the list of Datatype",{
    myFunction : typeof(myFunction),
    myObj:typeof myObj,
}]

console.log("myArray "+myArray);
console.log((myArray));
// Similarly we cam check for all other types.