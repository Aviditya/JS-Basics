class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    // for getter setter name of property must be same as of method

    get email(){
        return this._email.toUpperCase()
        // _email is kinda protected
    }
    set email(value){
        this._email=value
        // never return in set
    }
    get password(){
        return this._password.toUpperCase()
    }// get needs set too
    set password(value){
        this._password = value
    } // constructor and set are both setting causing problem
    // hence use new var
}//every class has default getter and setters

const utpal = new User('utpal@mail.com','123abc');

console.log(utpal.password);
console.log(utpal.email);
