const stringifyUrl = (url, query) => {
    url += '?'
    for(var key in query) {
        url += `${key}=${query[key]}&`
    }
    return url.substr(0, url.length-1)
}

const url = "http://localhost:8080/monkeys"
const query = {
    color: "black",
    species: "howler"
}

// console.log(stringifyUrl(url, query))

const destringifyUrl = url => {
    let splitUrl = url.split("?")[1]
    let objVals = splitUrl.split('&')
    let query = {}

    // for(let i = 0; i < objVals.length; i++){
    //     let temp = objVals[i].split("=")
    //     query[temp[0]] = temp[1]
    // }

    for(let property of objVals){
        let keyValueArr = property.split('=')
        query[keyValueArr[0]] = keyValueArr[1]
    }
    return query
}

console.log(destringifyUrl("http://localhost:8080/monkeys?color=black&species=howler"))
