// Javascript is synchronous in nature.

// Synchronous simply means that everything will
// run in particular onder.

// Asynchronous means we can run or execute any portion.

// Asynchronous items are stored in stack and hence runs after
// all the code executes.

console.log("This");

setTimeout(()=>{
    console.log("Asynchronous");
}, 1000) // Time is in milliseconds.

console.log("is");