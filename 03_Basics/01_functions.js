/**
 * Chapter 3 :
 * Topic : Functions 
 */

function oneFunction(params) {
    console.log('Hi');
    console.log('Hi');
    console.log('Hi');
    console.log('Hi');
    console.log('Hi');
    console.log('Hi');
    console.log('Hi');

}

// call by ref. 
// oneFunction();

// function addTwoNUmber(num1,num2) {
//     console.log(num1+num2);
// }

// // passing aruguments
// addTwoNUmber(3,4)

// result = addTwoNUmber(3,4)
// undefined
// cos not using return

function addTwoNUmber(num1,num2) {
    return (num1+num2)
}

const result = addTwoNUmber(2,3)
console.log(`Result : ${result}`);

// u can have default arguments too
function loginUserMessage(username = 'user') {
    if(!username){
        console.log("Please provide username!");
        return
    }
    return `${username} just logged in`
}

// return doesn't means print.

// console.log(loginUserMessage('utpal'));
// If no argument is passed it returns undefined
console.log(loginUserMessage());
// u can inmplement checks to avoid such.
console.log(loginUserMessage('Mangochan'));
//
// Shoping Cart
// when u dont know number of arguements in a function

function calculateCartPrice(cartNumber,...num1) {
    return num1
}

console.log(calculateCartPrice(12));
// calculateCartPrice(12,13,13) use res operator
console.log(calculateCartPrice(12,14,15,16));

anyObject={
    name:'utpal',
    price:122,
}

function handleObject(object) {
    return `${object.name} price is ${object.price}`
}

console.log(handleObject(anyObject))

// similarly for array we can do.

// We can pass an array in a function arguements too.

function handleArray(array) {
    const result = `First element of array is ${array[0]} and last element is ${array[array.length - 1]}`
    return result
}

console.log(handleArray([22,31,'RR',88]))
//---//