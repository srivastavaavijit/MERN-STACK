// let name = ["John", 1, true, null];
// // name.push("Cena"); // to push element at last.
// // name.unshift("Cena"); // push element at first.
// name.splice(1,0,"Cena") // To remove the value.
// console.log(name);
// console.log(name.length);

// let a = [10,20,35,19,25,60];

// for(let i=0; i<a.length; i++){
//     console.log(a[i]);
// }

// a.forEach((val,index,array) => {
//     console.log(val);
// });

// let num = a.map((val, ind) => {
//     return val;
// })

// console.log(num);

// Important array methods:
let num = [1,2,3,4,5,7,7];
let num2 = [10,20,30,40,50,60,70];
// console.log(num.concat(num2));
// console.log(num.indexOf(7));
// console.log(num.reverse());
// console.log(num.sort());
// let a = num.slice(1,4);
// console.log(a);

// let b = num.splice(1,4);
// console.log(b);

let a = num.filter((val,ind,arr)=>{
    if(val>=4 && val<=6)
        return val;
})
console.log(a);

let b = num.findIndex((val)=>{
    return val==7;
})

console.log(b);

let c = num.findLastIndex((val)=>{
    return val===7;
})

console.log(c);


let list = '10,20,30';
let arr = list.split(',');
arr.forEach(element=>{
    console.log(element);
})

console.log(arr);