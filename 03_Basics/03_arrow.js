// Arrow functions

const user = {
    username: 'utpal',
    price : 199,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to the Web!`);
        // this is used to access current context element.
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username='avi';
// user.welcomeMessage()
console.log(this);
// returns {} a blank object
// broswer events are window objects hence browser returns this

function one(params) {
    let username = 'utpal'
    console.log(this.username);
    // this does'nt works in fucntion only in objects it works.
}

// one()

// const two = function(){let value = 2;return `${this.value}` }
// console.log(two());
//output: undefined

const two = () => {
    let value = 2;
    console.log(this) };//return {}

two()
// op: undefined


console.log();

// Arrow function

// explicit return function
// const addTwo = (num1, num2) => {return num1+num2};
// console.log(addTwo(3,4))

// Implecit return function.

const addTwo = (num1, num2) => num1 + num2; // can use (num1 + num2)
// use () to return objects or something else
console.log(addTwo(4,6))

const myArray = [2,3,4,5,'R'];
// myArray.forEach()
// Above u can write function as an arugemnt in forEach.

// This does returns current context in normal function but not in arrow function.

const addThree = (num1) => (num1+3);
console.log(addThree(10));
/**
 * @returns 13 
 */

//---//