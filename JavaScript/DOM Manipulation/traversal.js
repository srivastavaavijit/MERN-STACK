// siblings:

// var a = document.querySelector('.hero').previousElementSibling;
// if(a == null){
//     console.log("Sibling not present");
// }
// else{
//     console.log(a);
// }


// console.log(document.querySelector('.hero').previousElementSibling.previousElementSibling);

// var b = document.getElementById('list').previousElementSibling;
// if(b==null){
//     console.log("No previous sibling present");
// }
// else{
//     console.log(b);
// }


var a = document.querySelectorAll('.hero');
for(let k of a){
    console.log(k);
}
