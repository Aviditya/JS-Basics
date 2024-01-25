//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());

// Practice dates please!
let myTimeStamp = Date.now()// it is in miliseconds
console.log(myTimeStamp);

let myNewDate = new  Date("22-Jan-2024")
console.log(myNewDate);
// A use full date method!
console.log(
myDate.toLocaleString('default',{
    month:"long"
})
);