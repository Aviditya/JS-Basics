/**
 * Scope in JS
 */

// scope {} of anything like if else, for loop etc.

// let a = 10;
// const b = 20;
// var c =30;

var c = 300;
let a = 500;
if (true){
    let a = 10;
    const b = 20;
    var c =30;
    console.log(`Inner: ${a}`);
}

// console.log(a);
// console.log(b);

console.log(c);
console.log(a);
// array=[12,14,15,'RR']
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
// }

// global scope under a node, brower and windows all are different.

// u can access global scope var in local scope not vice-versa

console.log('--- Scope ---');

function one(){
    const username='utpal'
    function two() {
        const website='yt';
        console.log(username);
        // it can access the username var coz its like global inside this function.
    }
    // console.log(website);
    // here we got ND coz we are trying to access a local scope var from out of its scope.
    // two()
    //commented here so it won't run.
}
one()

// every function creates a unique scope during its execution.

// same goes for if-else

if (true) {
    const username = 'utpal'
    if (username==='utpal') {
        const website=' yt'
        console.log(username+website);
    }
    // console.log(website);
    //same error inner scope var access in global as not defined
}

// console.log(username);
// error trying to access var which is not defined in global scope

// ++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++

// hoisting
// be careful how u define and declare functions


console.log(oneAdd(10));
// we can access it before too.

function oneAdd(num1) {
    return num1+1;
};
// delcaring fuctions like this is better, so can be accessed from anywhere in the code.


// console.log(twoAdd(20))
//ReferenceError: Cannot access 'twoAdd' before initialization
// cant access it before as it is hold inside a variable.

const twoAdd = function(num1){
    return num1+2
}

console.log(twoAdd(20))

//---//