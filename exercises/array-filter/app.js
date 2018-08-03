
function fiveAndGreaterOnly(arr){
    var results = arr.filter(function(val){
        if(val >= 5){
            return val
        }
    })
    return results
}

var nums = [3, 6, 8, 2]

function evensOnly(arr){
    var results = arr.filter(function(val){
        if(val % 2 ===0){
            return val
        }
    })
    return results;
}
evensOnly(nums)

function fiveCharactersOrFewerOnly(arr) {
    var results = arr.filter(function(val){
        if(val.length <= 5){
            return val
        }
    })
    return results
}

fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])

function peopleWhoBelongToTheIlluminati(arr){
    var result = arr.filter(function(person){
        if(person.member === true){
            return person
        }
    })
    return result
}

peopleWhoBelongToTheIlluminati([  
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
])


function ofAge(arr){
    var results = arr.filter(function(value){
        if(value.age >= 18){
            return value;
        }
    })
    return results
}

ofAge([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])










