
var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]
// 1. Log to the console every wizard's name.
// wizards.forEach(function(wiz){
//     console.log(wiz)
// })

var wizards = [  
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ]

// 2. Add an isAlive property to every wizard, setting it to true.
wizards.forEach(function(wiz) {
    return wiz.isAlive = true;
})

// console.log(wizards)


// 3. Make a new array of all the Wizards that are "neutral good".
var neutralWizards = wizards.filter(function(wiz){
    if(wiz.alignment === 'neutral good'){
        return wiz;
    }
})

// console.log(neutralWizards)


// 4. Find the index of a wizard that is "lawful good".
var indexOfLawfulGood = wizards.findIndex(function(wiz) {
    return wiz.alignment === 'lawful good'
})

// console.log(indexOfLawfulGood)

// 5. Return a Boolean that states whether or not all the wizards are alive.
var isAllAlive = wizards.every(function(wiz){
    return wiz.isAlive
})

// console.log(isAllAlive)

// 6. Return a Boolean that states whether or not at least one wizard is "neutral good".
var isSomeNeutralGood = wizards.some(function(wiz){
    return wiz.alignment === 'neutral good'
}) 

// console.log(isSomeNeutralGood)

// 7. Check every "alignment" for every wizard. Kill every "neutral good" wizard. (Modify every "neutral good" wizard's isAlive property to false.)
wizards.forEach(function(wiz){
    if(wiz.alignment === 'neutral good') {
        wiz.isAlive = false;
    }
})

// 8. Return a Boolean that states whether or not all the wizards are alive.
isAllAlive = wizards.every(function(wiz){
    return wiz.isAlive
})

// console.log(isAllAlive)

// 9. Return a Boolean that states whether or not some of the wizards are alive. 
var isSomeAlive = wizards.some(function(wiz){
    return wiz.isAlive
})

console.log(isSomeAlive)