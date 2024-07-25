// Constructor Function: Used to create and 
// initialize objects.

// let obj = {
//     name: "John",
//     age: 23
// }

// console.log(obj.name);
// console.log(obj.age);

// Constructor Function:
function Person(name, age){
    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log("Hello "+this.name);
    }
}

const person1 = new Person("Jack", 24);
console.log(person1.name);
console.log(person1.age);
person1.greet();


const person2 = new Person("IronMan", 33);
console.log(person2.name);
console.log(person2.age);
person2.greet();