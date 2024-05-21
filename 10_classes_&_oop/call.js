function SetUsername(username){
    // db calls or etc
    this.username = username
}

function createUser(username,email,password){
    SetUsername.call(this,username)

    this.email = email;
    this.password = password;
}

const one = new createUser('userOne', 'user@one.com',1234)

console.log(one);

// Remember that call() allows you to explicitly set the context for a function, making it useful for borrowing methods from other objects or dynamically changing the value of this. 😊

