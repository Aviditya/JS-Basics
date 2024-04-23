// Immediately invoked Function Expressions (IIFE)

// Immediate execution
// avoding global polution

function code(){
    console.log('Working!')
};

code();

// immediate execution
// avoid global scope polution

(()=>{
    // unmaed IIFE
    console.log('Connected!')
})();

// use ; after complition of IIFE

// Named iife

(function codetwo(){console.log('Coding Two');})();

// Passing a parameter in IIFE

((param)=>{
    console.log(`The passed parameter is ${param}`);
})('Utpal');

// Revise functions delcarations.