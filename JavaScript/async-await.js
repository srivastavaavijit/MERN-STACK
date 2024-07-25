function loadingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("1) Loading Data...");
            resolve();
        },2000);
    });
}

function collectingData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("2) Collecting Data...");
            resolve();
        }, 2000);
    });
}

function approvingData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("3) Approving Data...");
           resolve();
        }, 2000)
    });
}

function approved(){
    return new Promise((resolve, reject)=>{
        console.log("4) Approved");
    });
}

// loadingData().then(collectingData).then(approvingData).
// then(approved).catch((errorMessage)=>{
//     console.log(errorMessage);
// });

// Async-Wait:
async function Ex(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}
// This function returns a promise.

Ex();