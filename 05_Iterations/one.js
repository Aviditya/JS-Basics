// For

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log('Hi Five!');
    }
    console.log(element);
    
}
// Working of loops, first initilization ie i=0 the first part next conditon check and the the increment.
// The program initilizes only once and performs conditions check if true jumps to {} code and executes it after execution come backs to the () above and checks the 3rd part of the for loop and increments the i and then runs the loop again, check, execute and increment.

console.log();

for (let i = 1; i < 10; i++) {
    console.log('Outer loop:',i);
    for (let j = 1; j <=10; j++) {
        console.log(`Inner loop ${j}, inner i : ${i}`);
        console.log(i +'*'+j+'='+i*j); // Table upto 10
        
        
    }
    
};

console.log('===================================');
console.log();

// on array


let myHeros=['Batman','Superman','Pikachhu']
console.log(myHeros.length);

for (let index = 0; index < myHeros.length; index++) {// without index++ u'll get stuck in the loop
    const element = myHeros[index];
    console.log(element);
}

function nPage(){console.log();;console.log('=================== NEW PAGE ================');console.log();}

nPage()

// Break and continue

for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log('High Five!');
        break // breaks the control flow at 5
    }
    console.log(`Value ${index}`);
    
}
for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log('High Five!');
        continue // excludes one iteration, skip once 
    }
    console.log(`Value ${index}`);
    
}