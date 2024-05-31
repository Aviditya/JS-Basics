// can you set math.pi value as 4

console.log(Math.PI)

// If no why??
const descrptior = Object.getOwnPropertyDescriptor(Math,'PI')

console.log(descrptior);
//{
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const chai = {
    name: 'Mango Chai',
    price : 250,
    isAvailable:true,
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
// name is enuerable value false u cant see it through this for loop
chai.price=500;
console.log(chai);// name is not visible as writable is false

console.log(chai.name);// Mango Tea

////