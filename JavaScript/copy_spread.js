let arr1 = ["John", 202, true];
// let arr2 = arr1;
// arr1.push("Berg");

// let arr1 = ["John", 202, true];
// let arr2 = arr1.slice(0); // Does not modify the first array.
// arr1.push("Berg");

let arr2 = [...arr1];
arr1.push("Berg");


console.log(arr1);
console.log(arr2);