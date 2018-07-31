function letterFreq(str){
    var freqObj = {} // letter frequency obj
    var noDups = ''  //no duplicates string
    for(var i = 0; i < str.length; i++){
        var char = str[i]   // current character
        if(freqObj[char]){  // if current character is in obj then increment key by 1
            freqObj[char]++ 
        } else {            // if current character is not in obj then create new key as the character and assign 1; 
            noDups += char; 
            freqObj[char] = 1
        }
    }
    sortedObj = Object.keys(freqObj).sort(function(a, b) {return freqObj[a] - freqObj[b]})
    return freqObj;
}

var str = 'smelly solution'
console.log(letterFreq(str))
