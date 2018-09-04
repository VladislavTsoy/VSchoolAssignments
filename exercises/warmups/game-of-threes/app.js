function gameOfThrees(n, counter) {
    if(n === 1 || n === 0) {
        // console.log(counter)
        return counter
    }
    if(n % 3 === 0) {
        return gameOfThrees(n / 3, counter + 1)
    } else {
        return gameOfThrees(n - 1, counter)
    }
}

console.log(gameOfThrees(100, 0))