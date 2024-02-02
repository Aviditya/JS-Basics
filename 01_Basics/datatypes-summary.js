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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory
/* Two types of memory 
1. Stack (primitive) - You get a copy of a variable when u declare it.
2. Heap (non-primitive) - you get a ref. of original val. and changes gets reflected in original value here

*/

let myYoutubename="Dekho";
let myNewName=myYoutubename;
// You got the variables value copy to newName so now two "Dekho exists in stack memory"
myNewName='PlankTea';
//Now the other "dekho"  is not prsent n the new value is given to newName.

const myObjOne={
    uname:"raghu",
    age:32
    }
console.log("One",myObjOne);
const myObjTwo=myObjOne;
console.log(`myObjTwo :`,myObjTwo);
//the val of two is ref. of one, changes in two will reflect in one.
myObjTwo.age=43;
console.log('new two',myObjTwo,'old one',myObjOne);
//both objs age got changed here.