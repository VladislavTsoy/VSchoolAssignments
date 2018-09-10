const reverseFive = str => {
    let words = str.split(' ')
    for(let i = 0; i < words.length; i++){
        if(words[i].length >= 5){
            words[i] = reverseWord(words[i])
        }
    }
    return words.join(' ')
}

const reverseWord = word => {
    let end = word.length - 1
    let reversed = ""
    while(end >= 0) {
        reversed += word[end]
        end--
    }

    return reversed
}

console.log(reverseFive('this is a typical sentence'))

