function addTwoNums(num) {
    var nums = num.toString(10).split("").map(Number)
    return nums[0] + nums[1]
}

console.log(addTwoNums(29))

function repeatingLetters(str) {
    var res = ""
    for(var i = 0; i < str.length; i++){
        res = res + str[i] + str[i]
    }
    return res
}

console.log(repeatingLetters("string"))