const multiTable = n => {
    var result = []
    for(var i = 0; i < n; i++){
        result[i] = []
        for(var j = 0; j < n; j++){
            result[i][j] = (i+1) * (j+1)
        }
    }
    return result
}

console.log(multiTable(10))