let obj = {
    fName: "John",
    age: 21
};

// let obj2 = {
//     lname: "Smith"
// };

// obj2.__proto__ = obj;

let obj2 = Object.create(obj);

console.log(obj2);

console.log(obj2.fName, obj2.age);