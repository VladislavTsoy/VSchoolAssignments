var dictionary = {}

function addEntry(word, def) {
    if(!dictionary[word]){
        for(var keys in dictionary){
            if(keys === word.substr(0, word.length-1)) {
                return
            }
        }
        dictionary[word] = def
    }
}

addEntry('hello', 'definition')
addEntry('hellos', 'definition')

console.log(dictionary)