const pando = arr => {
    let set = new Set()
    let res = []
    for(var i = 0; i < arr.length; i++){
        if(!set.has(arr[i])) {
            set.add(arr[i])
            res.push(arr[i])
        }
    }
    res.sort((a, b) => a - b)
    return res
}

// console.log(pando([1,4,4,4,4,2,2,2,2,3,3,3,3]))

// const almostInc = arr => {
    
//     let flag = false;
//     for(var i = 0; i < arr.length; i++){
//         if()
//     }
// }