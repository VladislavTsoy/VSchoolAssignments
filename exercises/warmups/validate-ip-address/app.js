const validate = str => {
    var segments = str.split('.')
    if(segments.length !== 4){
        return false
    } 

    for(var i = 0; i < segments.length; i++){
        var temp = segments[i]

        if(temp.match(/[A-Za-z]/i) || temp.length > 3) {
            return false
        }

        temp = parseInt(temp)
        if(temp > 255 || temp < 0) {
            return false
        }
    }
    return true
}

console.log(validate('127.2.0.001'))