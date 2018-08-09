var people = [{
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 29
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    },{
      firstName: "Pasha",
      lastName: "Datsyuk",
      age: 13
    },{
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
    }
  ]

var sortedByLast = [
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },{
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },{
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },{
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },{
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },{
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    },{
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    }
]

var over18 = [ 
    { firstName: 'Sarah', lastName: 'Palin', age: 47 },
    { firstName: 'Rick', lastName: 'Sanchez', age: 78 },
    { firstName: 'Morty', lastName: 'Smith', age: 29 },
    { firstName: 'Kyle', lastName: 'Mooney', age: 27 },
    { firstName: 'Lev', lastName: 'Tolstoy', age: 82 } 
]

var ulList = [ 
    '<li>Lev Tolstoy is 82</li>',
    '<li>Rick Sanchez is 78</li>',
    '<li>Sarah Palin is 47</li>',
    '<li>Morty Smith is 29</li>',
    '<li>Kyle Mooney is 27</li>',
    '<li>Pasha Datsyuk is 13</li>',
    '<li>Frank Zappa is 12</li>' 
]




function olderThan18(arr) {
    return arr.filter(function(person){
        return person.age > 18
    })
}

function sortByLast(arr) {
    return arr.sort(function(a, b){
        if(a.lastName > b.lastName) return 1
        if(a.lastName < b.lastName) return -1
        return 0
    })
}

function ulTags(arr){
    var result = arr.sort(function(a, b){
        return a.age < b.age
    })
    result = arr.map(function(person){
        return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
    })
    return result
}

console.log(olderThan18(people))


module.exports = {
    olderThan18: olderThan18,
    people: people,
    over18: over18,
    sortByLast: sortByLast,
    sortedByLast: sortedByLast,
    ulList: ulList,
    ulTags: ulTags
}