// 1.
function getSum(a, b) {
    return a + b;
}

// 2.
function getLargest(a, b, c) {
    return Math.max(a, b, c);
}

// 3. 
function evenOrOdd(num) {
    return (num % 2 === 0) ? 'even' : 'odd'
}

// 4. 

function changeStr(str){
    if(str.length <= 20){
        return str + str;
    }
    return str.substring(0, (str.length / 2))
}

// Optional Challenge

// 1. fibonacci

function fib(n){
    var a = 0;
    var b = 1;
    var sum = 0;
    for(var i = 0; i < n; i++){
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
}



// 2. Quadratic formula

function quadForm(a, b, c){
    var result =[]
    var x = ((b * -1) + Math.sqrt((Math.pow(b, 2) - (4 * a * c))))/(2 * a)
    var y = ((b * -1) - Math.sqrt((Math.pow(b, 2) - (4 * a * c))))/(2 * a)

    result.push(x)
    result.push(y)
    return result
}

// 3. most frequent character

function mostFreq(str){
    var freq = 0
    var res
    var map1 = new Map()
    for(var i = 0; i < str.length; i++){
        
        if(map1.has(str[i])) {
            var temp = map1.get(str[i]) + 1
            map1.set(str[i], temp)
        } else {
            map1.set(str[i], 1)
        }

    }
    
    for(var [key, value] of map1.entries()){
        if(value > freq){
            res = key;
            freq = value;
        }
    }
    return res;
}
