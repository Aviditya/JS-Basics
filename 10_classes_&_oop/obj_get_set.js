const User = {
    _email: 'utpal@mail.com',
    _password : '123abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }

};

const tea = Object.create(User)// factory function
console.log(tea._email);

////