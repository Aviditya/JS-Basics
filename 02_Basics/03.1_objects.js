// Objects in JS

/**
 * Documentaion
 * @param {object} MyUser - A custom user variable 
 */

const MyUser = {name:'utpal',isLoggedIn:true}
console.log(MyUser)
// console.log(MyUser)

/**
 * @param {Symbol} Key - A symbol to be used inside an object as a key.
 * @function greeting() - A function to greet the user inside an object.
 */
const Key = Symbol ('UserKey');
MyUser[Key]='123@qwe';
console.log(MyUser)

function greeting(){
    console.log(`Welcome to Node,${this.name}`);
}

MyUser.greeting=greeting;
console.log('-----');
console.log(MyUser.greeting());
// Here we get undefined after its execution coz here the function is not returning anything.
MyUser.dobyear=1998;

function getAge(){
    return(`${this.name}'s age is ${2024-this.dobyear}`)
}

MyUser.Age=getAge;
console.log(MyUser);
console.log('---');
console.log(MyUser.Age());

// --- //