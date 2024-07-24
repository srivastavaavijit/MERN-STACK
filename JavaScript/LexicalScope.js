// var a = 3;
function fun(){
    var a = 1;
    console.log("Function: " + a);
    function fun2(){
        var a = 2;
        console.log("This is function: " + a);
    }
    fun2();
}

fun();
