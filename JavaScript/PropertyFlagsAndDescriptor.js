let emp = {};
emp.name = "John";

console.log(Object.getOwnPropertyDescriptor(emp,"name"));

Object.defineProperty(emp,"age",{
    value: 21,
    writable:false,
    configurable: false,
    enumerable:false
});

console.log(Object.getOwnPropertyDescriptor(emp,"age"));

emp.age = 23;     // writable property.

delete emp.age;  // configurable property.

// enumerable property:
for(let k in emp){
    console.log(k);
} 

console.log(emp);