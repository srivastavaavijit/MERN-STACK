// previous element sibling:
var a = document.querySelector('.hero').previousElementSibling;
if(a == null){
    console.log("Sibling not present");
}
else{
    console.log(a);
}



// previous sibling:
var b = document.querySelector('.hero');
console.log(b.previousSibling);


// next sibling:
console.log(b.nextSibling);

console.log(b.nextElementSibling);

