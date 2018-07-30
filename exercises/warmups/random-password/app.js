function createPassword(len){
    var result = ''
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+";
    for(var i = 0; i < len; i++){
        result += possible[Math.floor(Math.random() * possible.length)]
    }
    return result;
}

console.log(createPassword(10))