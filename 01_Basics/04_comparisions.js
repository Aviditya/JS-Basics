console.log(2==2,2>3,4<5);//these all are simple one.
console.log("2"==2,2>3,4<"5");
/**
 * Problem arises when we compare two different datatypes compaing operteors they convert the datatype but the equality check opertor does not.
 * So avois such things, write clean code
 */

console.log(null==0,null>0,null>=0);//in the 2nd and 3rd the null gets converted to 0 to compare similar things will happen with boolen values.

//strict check === this will check value as well as datatype.
console.log("2"===2,2>3,4<="5");
