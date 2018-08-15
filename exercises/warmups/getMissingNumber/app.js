const missingNum = arr =>  {
    var resultObj = {}
    arr.sort((a, b) => a - b)

    resultObj.mean = (arr.reduce((a, b) => a + b)) / arr.length
    resultObj.median = arr[Math.floor(arr.length / 2)]
    resultObj.mode = getMode(arr)

    var minRange = arr[0]

    for(var i = 1; i < arr.length - 1; i++){
        while(arr[i] === arr[i-1]) {
            i++
        }
        minRange += 1
        if(arr[i] !== minRange){
            resultObj.missingNum = minRange
            return resultObj
        }
    }
    
}

const getMode = arr => {
    var obj = {}
    for(var i = 0; i < arr.length; i++){
        (obj[arr[i]]) ? obj[arr[i]] += 1 : obj[arr[i]] = 1
    }
    var max = 0;
    var res;
    for(var key in obj) {
        if(obj[key] > max) {
            res = key
            max = obj[key]
        }
    }
    return res
}



console.log(missingNum( [-3,-3, -3, 0,0,0,0,-2,3,3,3,3,3,3,2,-1] ))
