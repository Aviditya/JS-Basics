const user = {
    username : 'utpal',
    loginCount : 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(this);
    }
}

// above is object literal
// console.log(user.username); // utpal
// console.log(user.getUserDetails());

// constructor function

// const promise = new Promise();
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    };

    return this
    // implicityly returns this by default
    //  write verbose code
};

const userOne = new User('utpal',8,true)
const userTwo = new User('Gamer',11,false)
console.log(userOne.constructor)
// console.log(userTwo)

// constructor fiunctions gives u new instaance 

// New keyword
// 1. creates new an empty object called instance
// 2. Constructor functions gets called by new and all the arguments gets packed in delivered in it.
// 3. this keyword injects the values in it.
// 4. returns everything

// instanceof javascript - MUST Read! 

