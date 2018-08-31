const matchWords = (str) => {
    var words = str.split(' ')
    var result = []
    var obj = {}
    for(var i = 0; i < words.length; i++){
        if(obj[words[i]]){
            obj[words[i]]++;
            if(obj[words[i]] === 2) {
                result.push(words[i])
            }
        } else {
            obj[words[i]] = 1
        }
    }
    return result;
}

console.log(matchWords("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
))