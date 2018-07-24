var input = "bookkeeper larry"

function nodups (str){
    var result = ""
    var  map = new Set()
    var dups = ""
    for(var i = 0; i < input.length; i++){
        if(map.has(input[i])){
            dups += input[i]
        } else {
            result += input[i]
            map.add(input[i])
        }
    }
    return [result, dups]
}


function altNoDups(str){
    var dups = ""
    var result = ""

    for(var i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) === i){
            result += str[i];
        } else {
            dups += str[i]
        }
    }
    return [result, dups]
}



function unique(str) {
    var result = '';
    for(var i = 0; i < str.length; i++) {
      if(result.indexOf(str[i]) < 0) {
        result += str[i];
      }
    }
    return result;
} 
   
   console.log(altNoDups('bookkeeper larry'));