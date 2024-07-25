function fun(age, gender){
    console.log(this.fName, age, gender);
}


var obj1 = {
    fName: "John",
    // fun: function(){
    //     console.log(this.fName);
    // }
};

var obj2 = {
    fName: "Kenny",
};


// It can be used to invoke (call) a method with an owner object as an
// argument (parameter).

// fun.call(obj2);

// fun.call(obj1, 12, "male");

// The apply() method is used to write methods, which can be used on different objects. It is different from the 
// function call() because it takes arguments as an array. 

// fun.apply(obj2,[12,"male"]);


var a = fun.bind(obj2,[12,"male"]);
console.log(a);