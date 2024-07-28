// children:

// var child = document.querySelector('div');

// console.log(child);
// console.log(child.children[0]);



// appendchild:

// const ul = document.querySelector('ul');

// console.log(ul);

// const newE = document.createElement('li');
// newE.textContent = "Giga Chad";
// ul.appendChild(newE);

// console.log(ul);




// remove:

// const ul = document.querySelector('li');
// ul.remove(); // Removes the first element of the list.



//replace child:
const list = document.querySelector('ul');

const childToChange = list.children[2];
const newLi = document.createElement('li');
newLi.textContent = "Giga Chad";

list.replaceChild(newLi, childToChange);

