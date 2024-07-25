// In callback, one function calls another function
// as an argument.

function fun(val){
    console.log(val);
}

function add(a,b,callback){
    let sum=a+b;
    callback(sum);
}

add(5,10,fun)