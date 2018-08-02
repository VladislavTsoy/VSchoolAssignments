
function codeCount(string) {
    var count = 0
    if(string.length < 4) {
        return 0;
    }
    for(var i = 0; i < string.length; i++){
        if((i + 3) < string.length && string[i] === 'c' && string[i+1] === 'o' && string[i+3] === 'e'){
            count++
            i+4
        }
    }
    return count;
}

function altCodeCount(string){
    return string.match(/co.e/gmi).length
}
3
console.log(codeCount("cozexxcope"))

