function replaceAt(str, index, char) {
    return (str.substr(0, index) + char + str.substr(index + char.length)).toLowerCase()
}

function myLowerDelim(str, delim) {
    return str.toUpperCase().split(delim)
}

function concatArray(arr){
    var str = ""
    for(var i = 0; i < arr.length; i++){
        if(i + 1 === arr.length){
            str += arr[i];
            str += '.'
        } else {
            str += arr[i];
            str += ' '
        }
    }
    return str;
}

function replaceWord(word, pattern, str){
    word = '/' + word + '/'
    if(str.match(word)){
        return str.replace(word, pattern);
    } else {
        console.log('the input word does not exist in your sentence')
    }
}

function duplicateLetter(str, char) {
    if(str.indexOf(char) === str.lastIndexOf()){
        console.log('no duplacates');
    } else {
        return [str.indexOf(char), str.lastIndexOf()]
    }
}

function myDelim(str) {
    var result = [];
    var start = 0;
    var flag = true;
    for(var i = 0; i < str.length; i++){
        if(str[i] === ' '){
            if(flag === true){
                result.push(0, i);
                flag = false;
                start = i + 1;
            } else {
                result.push(start, i)
                start = i + 1;
            }
        }
        if(i + 1 === str.length){
            result.push(start, i)
            start = i + 1;
        }
    }
    return result;

}