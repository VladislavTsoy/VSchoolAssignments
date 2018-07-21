// Loops and Arrays Practice


// 1.
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var count = 0

for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === 'computer'){
        count++;
    }
}

console.log('The number of computers is: ' + count++);


// 2.
var peopleWhoWantToSeeMadMaxFuryRoad = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  
for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad.age >= 18){
        if(peopleWhoWantToSeeMadMaxFuryRoad.gender = 'male'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, he's good to go");
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough to see Mad Max, don't let her in.");
        }
        
    } else {
        if(peopleWhoWantToSeeMadMaxFuryRoad.gender = 'male'){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, he's good to go");
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max, don't let her in.");
        }
    }
}

// 3.
var arr = [2, 5, 435, 4, 3]
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log(sum);

sum % 2 === 0 ? console.log('The light is off') : console.log('The light is on');