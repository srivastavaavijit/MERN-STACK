let hero = document.querySelector('#hero');
// console.log(hero.getAttribute('about'));


hero.setAttribute('example',12);

// console.log(hero);

for(let i of hero.attributes){
    console.log(i);
}