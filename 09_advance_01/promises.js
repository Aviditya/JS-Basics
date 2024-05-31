// Promises

// What is promises in JS??
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.



// How to use or consume a promise??
// eg : fetch()

// fetch(url).then().catch().finally()

// How to create a promise?

let promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // DB calls etc
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log('Promise completed!');
})

console.log('Work in progress...');

// second promise - without declaring it.
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function () {
    console.log('Promise two completed');
})

// third promise

const promiseThree = new Promise(function (res,rej) {
    setTimeout(() => {
        res({username:"Code",email:"code@mail.com"})// passed an obj
    }, 1000);
})

promiseThree.then(function(user){ // res just an object name can be anything tho like user/apple/etc
    console.log(user);
})

// We get all the parameters passed in resolve in the then function.

// Fourth promise

const promiseFour=new Promise(function(res,rej){
    setTimeout(() => {
        let error = false;
        if(!error){
            res({username:'admin',password:'pass@123'})
        } else {
            rej('Error - user not found!')
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    // where this return value goes to??
    // it can't goto any var but it can be chained
}).then((username)=>{
    // In this chained then we get values retured from above, call it anything like username
    console.log(username);
}).catch((error)=>{
    // using catch to get error is important
    console.log(error);
}).finally(()=>console.log('Promise Completed'))// Default behaviour will run for sure.

// Promise five with async await

const promiseFive = new Promise(function(res,rej) {
    setTimeout(() => {
        let error = false;
        if(!error){
            res({username:'Javascript',password:'pass@123'})
        } else {
        
            rej('Error - JavaScript went wrong!')
        }
    }, 1000);
})

// async await - It waits till task gets complted and then moves ahead.

async function consumePromiseFive() {
    try {
        const response = await promiseFive // promise is an object
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
console.log();
consumePromiseFive()

// JSON

async function getAllUsers() {
    try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json()
    console.log(data);
    }catch (error){
        console.log("E: ",error);
    }
};
// getAllUsers()

fetch('https://randomuser.me/api/')
.then((res)=>{return res.json()})
.then((data)=>console.log(data))
.catch((err)=>console.log(err));

// https://api.github.com/users/utpal3000

/**
 * A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
 */