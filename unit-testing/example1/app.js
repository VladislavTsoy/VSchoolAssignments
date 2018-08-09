var words = ['dog', 'cat', 'camel', 'unicorn']

function addS(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'string'){
            var word = arr[i]
            if(word.endsWith('s')){
                newArr.push(arr[i])
            } else {
                newArr.push(arr[i] + 's')
            }
        } else if(typeof arr[i] === 'number'){
            return 'no numbers'
        }
    }
    return newArr;
}

var a = 1
var b = 1

module.exports = {
    addS: addS,
    a: a,
    b: b
}




















// HOW TO ASSERT FUNCTION
//assert(actual, expected)

// var assert = function(actual, expected){
//     try {
//         if(actual !== expected) {
//             throw { 
//                 type: 'fail',
//                 details: { actual: actual, expected: expected } 
//             }
//         } else {
//             console.log('Success', 
//                 { 
//                     type: 'Test passed', 
//                     details: { actual: actual, expected: expected }
//                 })
//         }
//     } catch(error) {
//         console.log(error)
//     }

// }

// function zeroCount(arr) {
//     var result = 0
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] === 0) {
//             result++
//         }
//     }
//     return result
// }

// assert(zeroCount([1,2,3,0,1,2,3,0,1,2,3,0]), 3)
