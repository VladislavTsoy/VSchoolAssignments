const some = (arr, func) => {
    for(let i = 0; i < arr.length; i++) {
        if(!funct(arr[i])){
            return true
        }
    }
    return false;
}

const every = (arr, func) => {
    for(let i = 0; i < arr.length; i++) {
        if(!funct(arr[i])){
            return false
        }
    }
    return true;
}





// const every = (arr, checkType) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(typeof arr[0] !== checkType) {
//             return false
//         }
//     }
//     return true
// }

// const checkType = (val) => {
//     return typeof val
// }

// const some = (arr, checkOne) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === checkOne) {
//             return true
//         }
//     }
//     return false
// }

// const checkOne = (val) => {
//     return val
// }

// console.log(every(["ben", "jacob", "bob"], "string"))