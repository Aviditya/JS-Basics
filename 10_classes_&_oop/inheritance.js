// Inheritance

class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){ 
        super(username)
        this.password = password
        this.email = email
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher('Chai','chai@teacher.com','123')

chai.addCourse()

const mTea = new User('mTea')
mTea.logMe()

chai.logMe()


// checking
console.log(chai instanceof User);