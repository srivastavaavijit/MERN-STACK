function loadingData(callback){
    setTimeout(()=>{
        console.log("1) Loading Data...");
        callback();
    },4000);
}

function collectingData(callback){
    setTimeout(() => {
        console.log("2) Collecting Data...");
        callback();
    }, 5000);
}

function approvingData(callback){
    setTimeout(()=>{
        console.log("3) Approving Data...");
        callback();
    }, 2000)
}

function approved(){
    console.log("4) Approved");
}

// callback hell: Becomes hectic when there is
// lot of callback functions.
loadingData(function(){
    collectingData(function(){
        approvingData(function(){
            approved();
        });
    });
});
