
// var a = document.querySelector('h1').innerText;
// console.log(a);

// console.log('--------------');


// // text-content shows even hidden texts.
// var b = document.querySelector('h1').textContent;
// console.log(b);



// insert adjacent element:
var target = document.querySelector('.hero');

var newE = '<b> Drop X Out </b>';

target.insertAdjacentHTML("beforebegin", newE);