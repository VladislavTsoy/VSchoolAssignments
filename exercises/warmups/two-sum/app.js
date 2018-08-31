const two_sum = (arr, target) => {
    arr.sort((a,b) => a - b)
    let start = 0;
    let end = arr.length - 1

    while(start < end){
        let temp = arr[start] + arr[end]
        console.log(temp)
        if(temp === target) {
            return [start, end]
        } else if(temp < target){
            start++
        } else if(temp > target){
            end--
        }
    }
}

const two_sum_alt = (arr, target) => {
    let map = {}
    for(let i = 0; i < arr.length; i++){
        let temp = target - arr[i]
        if(map[temp]){
            return [map[temp], i]
        }
        map[arr[i]] = i
    }
    return -1
}

console.log(two_sum_alt([1,2,3,4,5,6], 8))