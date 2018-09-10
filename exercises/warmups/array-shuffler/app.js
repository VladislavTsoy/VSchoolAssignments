const shuffle = arr => {
    let results = []
    let n =  arr.length 

    for(let i = 0; i < n; i++){
        let random = Math.floor(Math.random() * arr.length)
        results.push(arr[random])
        arr.splice(random, 1)
    }
    return results
}

console.log(shuffle([1,2,3,4,5]))
