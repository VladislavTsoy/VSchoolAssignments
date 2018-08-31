function displayPet(arr){
    arr.sort((a,b) => a.age - b.age)
    var res = []
    for(var i = 0; i < arr.length; i++) {
        
        for(var j = 0; j < arr[i].pets.length; j++){
            if(arr[i].age > 20)
                res.push(`<li>${arr[i].pets[j]}</li>`)
        }
    }
    return res
}

const peopleWithPets = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: ["dog", "cat"]
    }, 
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: ["dog"]
    }, 
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: ["cat", "parrot"]
    }, 
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 13,
        pets: ["cat", "parrot", "dog"]
    }, 
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27,
        pets: ["dog"]
    }
];



function displayPetsWithNicknames(arr){
    arr.sort((a,b) => a.age - b.age)
    var res = []
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].pets.length; j++){
            if(arr[i].age > 20 && arr[i].pets[j].nickNames.length > 0)
                res.push(`<li>${arr[i].pets[j].name}</li>`)
        }
    }
    return res
}
const peopleAndPets = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];

console.log(displayPetsWithNicknames(peopleAndPets))

const peopleWithDogs = peopleAndPets.filter(person => {
    const dogsOnly = person.pets.filter(pets => {
        return pet.type === 'dog'
    })
    return dogsOnly.length > 0
})

peopleWithDogs.sort((a, b) => akp.age - b.age)

const firstName = peopleWithPets.reduce((agg, value) => {
    const names = value.pets.reduce((agg, value) => {
        return [...agg, value.name]
    }, [])
    return [...agg, value.name]
}, [])