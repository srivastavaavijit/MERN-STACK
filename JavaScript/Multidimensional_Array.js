let arr = [
    ["John", 30],
    ["Thomas", 24],
    ["Robert", 26]
];

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }


// arr.forEach(data => {
//     data.forEach(val => {
//         console.log(val);
//     });
// });

for(let ar of arr){
    for(let i of ar){
        console.log(i);
    }
}