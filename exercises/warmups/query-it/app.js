const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

const filterDatabase = (obj, database) => {
    if(Object.keys(obj).length === 0) return database
    let results = database.filter(data => {
        for(let key in data) {
            for(let token in obj) {
                if(key === token && data[key] === obj[token]) {
                    return data
                }
            }
        }
    })

    return results
}

console.log(filterDatabase({}, database));
    //returns entire database array

console.log(filterDatabase({dolphin: "squeak!"}, database));
    //returns empty array

console.log(filterDatabase({firstName: "Jack", age: 2}, database));
    //returns 

