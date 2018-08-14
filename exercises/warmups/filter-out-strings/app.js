const stringFilter = (arr) => {
    return arr.filter(function(num){
        return (typeof num === 'number')
    })
}

console.log(stringFilter([1, 2, 'a', 'b']))

const largestNum = (n) => {
    var res = ''
    for(var i = 0; i < n; i++) {
        res += '9'
    }
    return parseInt(res);
}

console.log(largestNum(4))