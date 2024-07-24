var map1 = new Map([[1,"one"],
    ["fname","mickey"],["whole number",[0,1,2,3,4]]]);

console.log(map1);

// console.log(map1.get("whole number"));


// var map2 = new Map();
// map2.set("fname", "mouse")
// console.log(map2);

var keys = map1.keys();
for(var k of keys){
    console.log(k);
}