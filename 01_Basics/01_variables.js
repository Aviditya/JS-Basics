const myName = 'Utpal'
let age = 32;
var isMarried = false;
let city = 'Pune'

// console.log(city);
//don't use var as it will cause u problem in scope

if (age>30){
    var isMarried=true; //this var changes the above variable which is out of scope
    console.log("Utpal is "+isMarried);
    let city='Alandi'; //where as this one does not changes the variable defined outside of this scope
    console.log(city);
}

console.table([myName,age,isMarried,city])