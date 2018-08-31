const app = (arr) => {
    let data = typeof arr[0][0]
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(typeof arr[i][j] !== data){
                return false
            }
        }
    }
    return true
}

console.log(app([[1,2,3],["a","b","c"],[true, true, true]]))