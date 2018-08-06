
function sortedOfAge(arr){
    var results = arr.filter(function(person){
        if(person.age > 18){
            return person
        }
    })

    results = results.sort(function(a, b) { 
        if(a.lastName < b.lastName) {
            return -1
        }
        if(a.lastName > b.lastName) {
            return 1
        }
        return 0
    })
    return results
}

// console.log(sortedOfAge([  
//   {
//     firstName: "Sarah",
//     lastName: "Palin",
//     age: 47
//   },{
//     firstName: "Frank",
//     lastName: "Zappa",
//     age: 12
//   },{
//     firstName: "Rick",
//     lastName: "Sanchez",
//     age: 78
//   },{
//     firstName: "Morty",
//     lastName: "Smith",
//     age: 13
//   },{
//     firstName: "Kyle",
//     lastName: "Mooney",
//     age: 27
//   }
// ]))


function toDisplayInHTML(arr){
    arr = arr.sort(function(a, b) {
        if(a.age > b.age) return -1
        if(a.age < b.age) return 1
        return 0
    })

    var results = arr.map(function(person){
        return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
    })

    return results

}

console.log(toDisplayInHTML([  
    {
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
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ]))