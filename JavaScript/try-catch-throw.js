function d(a,b){
    try{
        if(b==0){
            throw new Error("Cannot divide by zero.");
        }
        else{
            console.log(a/b);
        }
    }
    catch(err){
        console.log(err.message);
    }
};

d(10,0);

const a = 10;
console.log(a);