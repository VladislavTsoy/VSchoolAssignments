
// 1.
var readlinesync = require('readline-sync')
console.log(hello.toUpperCase())

// 2.
var hello = readlinesync.prompt()
console.log(hello.length)

// 3.
var first = readlinesync.prompt()
var second = readlinesync.prompt()
console.log(first + ' ' + second)

// 4.
var longmsg = readlinesync.prompt();
console.log(longmsg.substr(0, longmsg.length/2))

// 5.
var i = readlinesync.questionInt('enter number: ')
if(i > longmsg.length){
    console.log('number is too large, ' + 'max number that can is ' + longmsg.length-1)
}
console.log(longmsg.substr(i, longmsg.length))