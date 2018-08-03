function myMax(arr) {
    var max = -Infinity
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}




function findWord(arr, letter) {
    var words = []
    for(var i = 0; i < arr.length; i++){
        var current = arr[i];
        for(var j = 0; j < current.length; j++){
            if(current[j] === letter){
                words.push(current);
                break;
            }
        }
    }
    return words;
}







function isDivisible(a, b){
    return (a % b === 0) ? true : false;
}