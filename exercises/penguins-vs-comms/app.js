class Warrior {
    constructor(name, population){
        this.name = name
        this.population = population
    }
    sendNuke(party, hit, miss){
        let chance = Math.floor(Math.random() * 2)
        if(chance === 0) {
            let dmg = hit(party)
            console.log(`The ${this.name} sent a nuke and caused ${dmg} damage to the ${party.name}. The ${party.name} has a remaining population of ${party.population}.\n`)
        } else {
            let enemyName = miss(party)
            console.log(`The ${this.name} sent a nuke but missed the ${enemyName}. The ${party.name} has a remaining population of ${party.population}.\n`)
        }
    }
}

const penguins = new Warrior('Penguins', 1000000)
const martians = new Warrior('Martians', 1000000)

let turn = Math.floor(Math.random() * 2)

const hit = party => {
    var dmg = Math.ceil(Math.random() * 10) * 50000
    party.population -= dmg
    if(party.population < 0){
        party.population = 0
    }
    return dmg
}

const miss = party => {
    return party.name;
}

const battle = (player1, player2) => {
    if(player1.population <= 0) {
        console.log(`${player2.name} defeated ${player1.name}`)
        clearInterval(intervalId)
        return
    } else if(player2.population <= 0){
        console.log(`${player1.name} defeated ${player2.name}`)
        clearInterval(intervalId)
        return
    }
    
    if(turn === 1){
        player1.sendNuke(player2, hit, miss)
        turn = 0;
    } else {
        player2.sendNuke(player1, hit, miss)
        turn = 1
    }
}

let intervalId = setInterval( ()=> battle(penguins, martians), 1000)
