// Loop Olympics
// Preliminaries
// 1.
for(var i = 0; i < 10; i++){
    console.log(i);
}

// 2.
for(var i = 9; i >= 0; i--){
    console.log(i);
}

// 3.
var fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

// Bronze Medal
// 1.
var result = [];
for(var i = 0; i < 10; i++){
    result.push(i);
}

// 2.
for(var i = 0; i < 101; i += 2){
    console.log(i);
}

// 3.
result = []
fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(var i = 0; i < fruit.length; i += 2) {
    result.push(fruit[i]);
}

// Silver Medal
var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

// 1.
for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
}

// 2.
var names = []
var occupations = []

for(var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].names);
    occupations.push(peopleArray[i].occupation);
}

// 3.

names = []
occupations = []
for(var i = 0; i < peopleArray.length; i++){
    if(i % 2 === 0){
        names.push(peopleArray[i].name);
    } else {
        occupations.push(peopleArray[i].occupation);
    }
}

// Gold Medal
// 1. 

var arr = [];
for(var i = 0; i < 3; i++){
    arr[i] = []
    for(var j = 0; j < 3; j++){
        arr[i][j] = 0
    }
}

console.log(arr)

for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
        arr[i][j] = i
    }
}
console.log(arr)

for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
        arr[i][j] = j
    }
}

console.log(arr);

for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
        arr[i][j] = 'x';
    }
}

console.log(arr);
