// 1.
var readlinesync = require('readline-sync')
console.log('This is a node calculator ----')
var opArr = ['+', '-', '*', '/']

var num1 = readlinesync.questionInt('enter the first number: ')
var op = readlinesync.keyInSelect(opArr, 'enter the operation: ')
var num2 = readlinesync.questionInt('enter the second number: ')


function calculate(num1, num2, op){
    switch(op) {
        case '+':
            var res = num1 + num2
            console.log(res)
            break
        case '-':
            var res = num1 - num2
            console.log(res)
            break
        case '*':
            var res = num1 * num2
            console.log(res)
            break
        case '/':
            var res = num1 / num2
            console.log(res)
            break
        default: 
            console.log('unknown operation')
    }
}

calculate(num1, num2, opArr[op])