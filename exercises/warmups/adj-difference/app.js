const adjDiff = (arr) => {
    if(arr.length < 3) return
    let max = 0;
    let res;
    for(var i = 0; i < arr.length - 2; i++){
        let temp = arr[i].length + arr[i+1].length + arr[i+2].length
        if(temp > max) {
            max = temp
            res = []
            res.push(arr[i], arr[i+1], arr[i+2])
        }
    }
    return res
}

const inputArray = ["this", "is", "an", "array"]

console.log(adjDiff(inputArray))