function User(email, password){
    this._email = email;
    this._password = password;

    // how to do without get set before classes

    // function is also an object
    Object.defineProperty(this, 'email',{
        get:function(){
            return this._email.toUpperCase()
        },
    set:function(value){
        this.email=value
    } })
}

const chai = new User('mm@kk.com','123zxy')
console.log(chai.email);

