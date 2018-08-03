var readline = require('readline-sync')
var gameFunctions = require('./gameFunctions')

var BSC = ['Bulbasor', 'Charmander', 'Squirtle']
var currentPokemon;

var player = {
    health: 100,
    myPokemon: [],
    pokemonNames: [],
    pokeBag: []
}
var boss = {
    health: 50
}


/**-------------------------------------------/
 * INTRO - get player name and get boss name
 * -------------------------------------------/
 */
player.name = readline.question("\nProfessor Oak: Hey there! my name is Professor Oak, what's your name? ")
gameFunctions.myClear()
console.log(`\nProfessor Oak: Welcome to the world of Pokemon, ${player.name}! \nis inhabited by creatures called POKEMON! \nFor some people, POKEMON are pets. Others use them for fights. \nMyself...I study POKEMON as a profession.`)
boss.name = readline.question("\nProfessor Oak: This is my grandson. He's been a rival of yours since you were a baby.\nErr...what's his name again? ")
gameFunctions.myClear()
console.log(`\nProfessor Oak: Ah! ${boss.name}, thats right...how cound I forget. \n`)
console.log(`\nProfessor Oak: I need your help for my study's:`)

currentPokemon = readline.keyInSelect(BSC, "select a pokemon for your journey: ")
while(currentPokemon === -1){
    currentPokemon = readline.keyInSelect(BSC, "select a pokemon for your journey: ")
}

//  Select pokemon

currentPokemon = BSC[currentPokemon]
var res = gameFunctions.capture(currentPokemon)
res[0].attacks = gameFunctions.assignAttack();

player.myPokemon.push(res[0])
player.pokemonNames.push(res[1])
gameFunctions.myClear()
console.log(`\nProfessor Oak: ${currentPokemon}, nice choice!`)
console.log(`\nProfessor Oak: ${player.name}! Your very own POKEMON legend is about to unfold!\nA world of dreams and adventures with POKEMON awaits! Let's go!`)
console.log('\n~~~~~~Mission: Capture as many pokemon as possible for Professor Oak~~~~~~~\n')
console.log(`- Walk through the tall grass and capture pokemon, but watch out for ${boss.name}. He's up to no good. \n\n`)

/**-------------------------------------------/
 * START OF GAME
 * -------------------------------------------/
 */

while(player.health > 0) {
    if(readline.keyInYN(`Walk in tall grass? `)){
        gameFunctions.myClear()
        var check = gameFunctions.walk();

        if(check === 'pokemon'){

            var currentEnemy = gameFunctions.wildPokemon();

            gameFunctions.showStats(currentEnemy)
            console.log('\nselect pokemon to fight with or CANCEL to run away ')
            var selectedPokemon = readline.keyInSelect(player.pokemonNames, 'Select pokemon or Run')
            
            gameFunctions.myClear()

            if(selectedPokemon > -1) {
                selectedPokemon = player.myPokemon[selectedPokemon]
                console.log('\n' + selectedPokemon.name + ", I choose you!")
                gameFunctions.lineBreak()
                console.log('my pokemon:')
                gameFunctions.showStats(selectedPokemon)
                gameFunctions.lineBreak()
                console.log('enemy:')
                gameFunctions.showStats(currentEnemy)
                gameFunctions.lineBreak()
                gameFunctions.battle(selectedPokemon, currentEnemy)
            } else {
                console.log('you ran away!')
            }

        } else if(check === 'boss') {

        }


    }
}