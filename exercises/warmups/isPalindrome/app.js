function isPalindrome(str) {
    var start = 0;
    var end = str.length - 1;
    var temp = str.toLowerCase()
    while(start < end) {
        while(!isAlpha(temp[start])){
            start++;
        }
        while(!isAlpha(temp[end])){
            end--
        }
        if(temp[start] !== temp[end]) {
            return false;
        }
        start++
        end--
    }
    return true
}

function isAlpha(ch){
    return /^[A-Z]$/i.test(ch);
}