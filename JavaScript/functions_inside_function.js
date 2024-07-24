function fun(){
    console.log("I am function 1");
    function fun2(){
        console.log("I am function 2");
    }

    fun2();
}

fun();