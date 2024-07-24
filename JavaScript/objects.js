let obj = {
    name:"Bravo",
    age:21,
    "last name":"John",

    fun: function(){
        console.log("I am a function.");
    },

    arr:[10,20,30]
}

console.log(obj["last name"]);
obj.fun();

obj.key = "Item";
console.log(obj);

let a = "key2";
obj[a] = "item2";

for(let i in obj){
    console.log(obj[i]);
}