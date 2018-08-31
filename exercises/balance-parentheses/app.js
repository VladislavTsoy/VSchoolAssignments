const balanceParentheses = (str) => {
    let res = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            res++
        } else if(str[i] === ')'){
            res--
        }
        if(res < 0) {
            return false
        }
    }
    return (res === 0) ? true : false
}

console.log(balanceParentheses("((()))"))