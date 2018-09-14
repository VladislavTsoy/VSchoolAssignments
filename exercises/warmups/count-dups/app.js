const countDups = str => {
    let dups = {}
    let strCopy = str.toLowerCase()
    let result = 0;

    for(let i = 0; i < strCopy.length; i++){
        let currentChar = strCopy[i]
        if(dups[currentChar] === 1){
            result++
            dups[currentChar]++
        }
        if(!dups[currentChar]){
            dups[currentChar] = 1
        }
    }
    return result
}

console.log(countDups("abcde"))
console.log(countDups("aabbcde"))
console.log(countDups("Indivisible"))