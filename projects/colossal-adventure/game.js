var readline = require('readline-sync')
var gameFunctions = require('./gameFunctions')
var term = require('terminal-kit').terminal

var BSC = ['Bulbasor', 'Charmander', 'Squirtle']
var currentPokemon;

var player = {
    health: 0,
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
term.yellow(`
                      .:XHHHHk.              db.   .;;.     dH  MX 0
                    oMMMMMMMMMMM       ~MM  dMMP :MMMMMR   MMM  MR      ~MRMN
                    QMMMMMb   MMX       MMMMMMP !MX' :M~   MMM MMM  .oo. XMMM 'MMM
                       MMMM.  )M> :X!Hk. MMMM   XMM.oe  .  MMMMMMM X?XMMM MMM>!MMP
                       'MMMb.dM! XM M'?M MMMMMX.MMMMMMMM~ MM MMM XM    MX MMXXMM
                        ~MMMMM~ XMM. .XM XM  MMMb.~*?**~ .MMX M t MMbooMM XMMMMMP
                         ?MMM>  YMMMMMM! MM    ?MMRb.           !L MMMMM XM IMMM
                          MMMX    MMMM   MM       ~%:           !Mh.    dMI IMMP
                          'MMM.                                             IMX
                           ~M!M                                             IMP
`)

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
var pokemonObj = res[0]
var pokemonName = res[1]
pokemonObj.attacks = gameFunctions.assignAttack();
player.health = pokemonObj.health
player.myPokemon.push(pokemonObj)
player.pokemonNames.push(pokemonName)
gameFunctions.myClear()
console.log(`\nProfessor Oak: ${currentPokemon}, nice choice!`)
console.log(`\nProfessor Oak: ${player.name}! Your very own POKEMON legend is about to unfold!\nA world of dreams and adventures with POKEMON awaits! Let's go!`)
console.log('\n~~~~~~Mission: Capture as many pokemon as possible for Professor Oak~~~~~~~\n')
console.log(`- Walk through the tall grass and capture pokemon, but watch out for ${boss.name}. He's up to no good. \n\n`)

/**-------------------------------------------/
 * START OF GAME
 * -------------------------------------------/
 */
var mainSelection = ['Walk in tall grass', 'Check pokebag', 'Exit Game']
while(player.health > 0) {
    var choice = readline.keyInSelect(mainSelection, "Options: ")
    if(choice === 0){
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
                console.log()
                player.health = selectedPokemon.health
                if(selectedPokemon.health > 0){
                    var temp = gameFunctions.droppedItem()
                    player.pokeBag.push(temp)
                } else {
                    console.log('Oh no! Your Pokemon were defeated! need to rush to the nearest Poke Center.')
                    console.log('\n\nGAME OVER!\n\n')
                }
            } else if(selectedPokemon < 0){
                gameFunctions.runAway(player.myPokemon[0], currentEnemy)
                player.health = player.myPokemon[0].health
            }

        } else if(check === 'boss') {

        }
    } else if(choice === 1){
        checkBag();
    } else if(choice === 2) {
        console.log('CYA NEXT TIME!') 
        player.health = 0;
    }
}

/*---------------------------------------*/
/* items navigator */
/*---------------------------------------*/
function checkBag(){
    console.log(`Player: ${player.name}\nPokemon: ${player.pokemonNames}\nPokeBag: ${player.pokeBag}`)
    var choice = ['Pokemon stats', 'Use items']
    var options = readline.keyInSelect(choice, 'What would you like to do? ')
    if(options === 0) {
        console.log(`Pokemon: ${player.myPokemon[0].name}\n${player.myPokemon[0].name}'s health: ${player.myPokemon[0].health}\n${player.myPokemon[0].name}'s attack: ${player.myPokemon[0].attack}\n${player.myPokemon[0].name}' defense: ${player.myPokemon[0].defense}\n${player.myPokemon[0].name}'s attacks: ${player.myPokemon[0].attacks}`)
    } else if(options = 1){
        if(player.pokeBag.length > 0){
            console.log('Which item would you like to use?')
            options = readline.keyInSelect(player.pokeBag, 'Select item: ')
            if(options === -1) {
                return;
            }
            var item = player.pokeBag[options];
            console.log('chose: ' + item)

            switch(item) {
                case 'Potion': 
                    console.log(`${player.myPokemon[0].name} drank the potion: health restored by: 20HP`)
                    player.myPokemon[0].health += 20;
                    player.health = player.myPokemon[0].health
                    
                    player.pokeBag.splice(options, 1)
                    break;
                case 'Berry':
                    console.log(`${player.myPokemon[0].name} ate the berry: health restored 10HP`)
                    player.myPokemon[0].health += 10;
                    player.health = player.myPokemon[0].health
                   000
                    player.pokeBag.splice(options, 1)
                    break;
                default: 
                    break;
            }
        } else {
            console.log('Your PokeBag is empty.')
        }
    } else {
        return
    }
}

