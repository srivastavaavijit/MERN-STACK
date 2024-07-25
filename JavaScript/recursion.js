// for(let i=1; i<=10; i++){
//     console.log(i);
// }


// Print number from 1 to 10:

// function printNumberRecursive(n){
//     if(n==10){
//         console.log(n);
//         return;
//     }
//     console.log(n);
//     printNumberRecursive(++n);
// }

// printNumberRecursive(1);


// Printing factorial of a number:
function printFactorial(n){
    if(n==0 || n==1){
        return n;
    }
    return n * printFactorial(--n);
}

console.log(printFactorial(5));