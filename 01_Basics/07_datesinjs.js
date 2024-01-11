// Learn about dates in JS from MDN

/**
 * Date is object type.
 */

const myDate = new Date();
console.log(myDate.toLocaleString());

// custom date

const myNewDate = new Date("11-01-2024")
console.log(myNewDate);
console.log(myNewDate.toLocaleString());
console.log(myNewDate.toUTCString());
console.log(myNewDate.toLocaleDateString());
console.log(myNewDate.getTime());
console.log(`The time in second is ${myNewDate.getTime()/1000}`);
// you can round the myNewDate value in floor to get non-decimal number.
// date.now() gives miliseconds
//divide it by 1000 and use floor 
console.log(myDate.getDay());
//Getting much specific values from date.
console.log(myNewDate.toLocaleString("default",{
    day:"2-digit",
    weekday:"long"
})
);