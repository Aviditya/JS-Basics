// to be continued...


const coding=['js','ruby','python','cpp','java']

coding.forEach(function (item){console.log(item);});
// its a callback its anonymous function

// can we use arrow funtn? yes :D
console.log();
coding.forEach((item) => (console.log(`${item}`)));

console.log();
(()=>(console.log('Hehe')))();

function printMe(params) { //pass function's reference in the parameter
    console.log(`./${params}`);
};

console.log();
coding.forEach(printMe);

console.log();
coding.forEach((item, index, arr)=>{console.log(item,index,arr)});
 
console.log();

const myCoding=[
    {
        lName:'javascript',
        fName:'js'
    },
    {
        lName:'java',
        fName:'java'
    },
    {
        lName:'python',
        fName:'py'
    },
];

myCoding.forEach((value)=>(console.log(value.lName)));

////
