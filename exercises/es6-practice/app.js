
let name = 'John'
let age = 101
let pets = ["cat", "dog"]

let petObjects = []

for (let i = 0; i < pets.length; i++){
    let pet = {type: pets[i]}
    let name;
    if (pets[i] === "cat"){
        name = "fluffy"
    } else {
        name = "spot"
    }
    pet.name = name
    petObjects.push(pet)
}

const vegetables = carrots.map(carrot => { 
    return { type: "carrot", name: carrot}
})

friends = people.filter(person => {
    return person.friendly
})

const doMathSum = (a, b) => a + b
const produceProduct = (a, b) => a * b
const greeting = (f = 'Jane', l = 'Doe', a = 100) => console.log(`Hi ${f} ${l}, how does it feel to be ${a}?`)
const dogs = animal.filter(animal => (animal.type === 'dog') ? true : false)

const greet = (loc, name) => console.log(`Hi ${name},\nWelcome to ${loc}.\n\n I hope you enjoy your stay. Please as the president of Hawaii if you need anything.`)
