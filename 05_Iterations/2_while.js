// While loop
let index=0
while (index <= 10) {
    console.log(`Value is ${index}`);
    index = index + 2
}

console.log();

let myHeros = ['Batman','Superman','MickyMouse']

let arr = 0;
while (arr < myHeros.length) {
    console.log(`Hero : ${myHeros[arr]}`);
    arr++
}

console.log();

// do while
// It performs the task and then check the condition and if the condition is true then it runs it again
let score = 12;
do {
    console.log(`Score : ${score}`);
} while (score <=10);