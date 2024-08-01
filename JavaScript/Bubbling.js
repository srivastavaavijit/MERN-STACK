const body = document.getElementsByTagName('body')[0];
const div = document.getElementsByTagName('div')[0];
const span = document.getElementsByTagName('span')[0];
const button = document.getElementsByTagName('button')[0];

body.addEventListener('click', ()=>{
    console.log("Body was clicked.")
})
div.addEventListener('click', ()=>{
    console.log("Div was clicked.")
})
span.addEventListener('click', ()=>{
    console.log("Span was clicked.")
})
button.addEventListener('click', (event)=>{
    event.stopPropagation()
    console.log("Button was clicked.")
})


