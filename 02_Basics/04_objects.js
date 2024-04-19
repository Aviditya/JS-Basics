/**
 * This is part 2 of Objects.
 * 
 */

// singleton objects
// Previously we used as literals

const appUser = new Object()
//above is singleton object
const userInfo = {}
// NOT Singelton object
const oneUser={
    email:'one@user.com',
    fullname:{
        fName:'utpal',
        lName:'sahu'
    },
    skills:{
        soft:{
            NonVerbal:['Presentation','Bodylangyage']
        },
        hard:{
            technical:['python','js']
        }
    }
};

console.log(oneUser.skills.hard.technical);
// what if skills dont exists?

// How to combine any objects
const objectOne={1:'a',2:'b'}
const objectTwo={3:'c',4:'d'}
const objectFour={5:'e',6:'f'}

// const objectThree = {objectOne, objectTwo};
// This puts two objects inside one
// objectOne = {objecOne, objectTwo}

// Use below assign method
// const objectThree= Object.assign({},objectOne, objectTwo, objectFour);
// console.log(objectThree);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// or u can use spread operator
const objectThree={...objectOne,...objectTwo,...objectFour};
console.log(objectThree);
console.log();

// getting objects from an array
const users=[
    {
        name:'userOne'
    },
    {name:'userTwo'},
    {name:'userThree'}
];



console.log(users[2].name);
console.log();
console.log(oneUser);
//get its keys
console.log();
console.log(Object.keys(oneUser));
//similar for .values
// .entries to get keys and values in an array form.
console.log(Object.values(oneUser));
// check if an object has a perticular property or not
console.log(oneUser.hasOwnProperty('email'));

//---//
console.log();
console.log('-------Part 3 ---------------');
console.log();


// de-structuring an object

const course = {
    cname:'Js Masterclass',
    price:1999,
    cInstructor:'John'
}

// course.cInstructor
const {cInstructor: cI} = course
console.log(cI);

// destructuring done

// API 

// {
//     "username : "utpal",
//     "age": "20"

// }

// JSON
//--//