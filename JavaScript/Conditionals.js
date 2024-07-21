let age = 21;
let name = "john";
if(age >= 18){
    if(name == "John"){
        console.log("You are eligible to vote.");
    }
    else{
        console.log("Name does not match.");
    }
}
else{
    console.log("You are not eligible to vote.");
}


let a = 10;
let b = 5;

if(a > b){
    console.log("a is greater than b.");
}
else if(b > a){
    console.log("b is greater than a.");
}
else{
    console.log("a is equal to b.");
}




let ch = 4;

switch(ch){
    case 1:
        console.log("I am 1.");
        break;
    case 2:
        console.log("I am 2.");
        break;
    case 3:
        console.log("I am 3.");
        break;
    default:
        console.log("No choice matches.");
}
