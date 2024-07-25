// let sym = Symbol("id");
// console.log(sym.toString());

// console.log(sym.description);

// let sym1 = Symbol("id");
// console.log(sym == sym1);


let id = Symbol("id");
let obj = {
    name: "John",
    age: 20,
    [id]: 1
}
// console.log(obj);
// console.log(obj[id]);

for(let key in obj){
    console.log(key);
}