/**
 * 
 */
// singleton objects
// Constructions se bana hua objects are singleton

// object literals

const mySymbol= Symbol ('')

const JsUser = {
    name: "Utpal",
    'Full name' :'Utpalkant',
    age : 20,
    location : 'Pune',
    isLoggedIn : false,
    Skills : ['Combat','Assualt','Camper'],
    [mySymbol]: "JsKey"
}
// key is string
// Accessing an object

console.log(JsUser.name);
console.log(JsUser['Full name']);
// To access such keys with space we must use [] 
// Similarly for using symbol dataype in an object and to access them.
console.log(JsUser[mySymbol]);
console.log(typeof JsUser[mySymbol]);
console.log(typeof mySymbol);

// how to overrite any key's value of an obj
JsUser.isLoggedIn=true;
console.log(JsUser)
// how to lock and don't allow changes.
// Object.freeze(JsUser)
// The whole object gets freeze here meaning no further changes can be made in that perticular object

JsUser.location='Mumbai';
console.log('Changing User location!');
console.log(JsUser);
// The location doesn't chagnes coz the obj is freezed, it doesnt throw any error either.

// Functions can be used as a variable too.
JsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
//must unfreeze it.

//---//
