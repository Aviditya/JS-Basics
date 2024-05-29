// ES6 Introduced synstaic sugar to use classes

class User {
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){ // a method
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('Chai', 'Chai@mail.com','123')


// console.log((chai.encryptPassword()));
// console.log((chai.changeUsername()));

// behind the scene

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const Tea = new User('Tea', 'Tea@mail.com','123')


console.log((Tea.encryptPassword()));
console.log((chai.changeUsername()));

