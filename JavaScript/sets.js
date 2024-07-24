const arr = [10,20,30,40,50];
console.log(arr);


//Sets cannot have duplicate elements.
const s = new Set([10,20,30,40,50,30]);
s.add("Hello");
console.log(s);

var length=0;
for(let element of s){
    length++;
}
console.log(length);