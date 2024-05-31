// static props
class User{
    constructor (username){
        this.username = username;
    };
    // methods
    logMe(){
        console.log(`Username: ${this.username}`)
    };

    static createId(){
        return `122`
    }
}

const utpal = new User('utpal');
// console.log(utpal.createId()); // error cant access static method/function

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const mPhone = new Teacher('mPhone',"mphone@call.com");

// console.log(mPhone);
mPhone.logMe();
