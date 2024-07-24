let arr = [
    {user:1, name:"Tate"},
    {user:2, name:"Shelby"},
    {user:3, name:"Chad"}
];

// console.log(arr);

// console.log(arr[0]);

for(let i of arr){
    console.log(i.name)
}

let[item1, item2] = arr;
console.log(item1);
console.log(item2.name);