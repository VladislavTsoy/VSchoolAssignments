var readline = require('readline-sync')

/*---------------------------------------*/
/* Pokemon constructor*/
/*---------------------------------------*/

function Pokemon (name, health, attack, defense, noise){
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.attacks = []
    this.defense = defense;
    this.sound = function(){
        console.log(noise)
    }
}

/*---------------------------------------*/
/* Pokemon Objects */
/*---------------------------------------*/
var mewtwo = new Pokemon('MewTwo', 50, 15, 20, '"yoooooo!"')
var taurus = new Pokemon('Taurus', 40, 10, 9, '"moooooo!"')
var mankey = new Pokemon('Mankey', 30, 10, 7, '"oo aaa ooo aaaa!"')
var pikachu = new Pokemon('Pikachu', 25, 5, 5, '"pika pika!"')
var ratatoulli = new Pokemon('Rattata', 30, 5, 5, '"rat tat tat!"')
var pidgey = new Pokemon('Pidgey', 30, 5, 5, '"eeee!"')
var butterfree = new Pokemon('Butterfree', 25, 5, 5, '"wooosh"')
var bulbasor = new Pokemon('Bulbasor', 50, 10, 20, '"bulbaaaa"')
var charmander = new Pokemon('Charmander', 50, 10, 20, '"arrrrrghh"')
var squirtle = new Pokemon('Squirtle', 50, 10, 20, '"squirttttle"')
var caterpie = new Pokemon('Caterpie', 15, 3, 10, '"sqirmmmmmm"')
var weedle = new Pokemon('Weedle', 15, 10, 20, '"weeeeeee"')
var jigglypuff = new Pokemon('Jigglypuff', 20, 10, 20, '"jiggllyyyyy"')
var diglet = new Pokemon('Diglet', 10, 10, 20, '"diiiiiiiiglet"')
var meowth = new Pokemon('Meowth', 10, 10, 20, '"meow"')
var growlithe = new Pokemon('Growlithe', 25, 10, 20, '"rawrrrrrrr"')
var abra = new Pokemon('Abra', 10, 10, 20, '"abbbbraaaa"')
var geodude = new Pokemon('Geodude', 50, 3, 20, '"geodudeeeee"')
var gastly = new Pokemon('Gastly', 20, 10, 20, '"gassssssstly"')
var voltorb = new Pokemon('Voltorb', 20, 5, 20, '"buzzzzzz"')
var gengar = new Pokemon('Gengar', 50, 5, 20, '"gannggggg gannggggg"')
var haunter = new Pokemon('Haunter', 30, 5, 20, '"boooooooo"')


var pokemons = [mewtwo, taurus, mankey, pikachu, ratatoulli, pidgey, butterfree, bulbasor, charmander, squirtle, caterpie, weedle, jigglypuff, diglet, meowth, growlithe, abra, geodude, gastly, voltorb, gengar, haunter]
var items = ['Potion', 'Berry']

/*---------------------------------------*/
/* Function capture is used to select the first pokemon */
/*---------------------------------------*/

function capture(name){
    var res = []
    for(var i = 0; i < pokemons.length; i++){
        if(pokemons[i].name === name){
            res[0] = pokemons[i]
            res[1] = pokemons[i].name
            return res
        }
    }
}

/*---------------------------------------*/
/* displays starter pokemon stats */
/*---------------------------------------*/

function showStats(pokemon){
    console.log(`\n${pokemon.name}'s stats: \nhealth: ${pokemon.health} \nattack: ${pokemon.attack}\ndefense: ${pokemon.defense}\n`)
}

/*---------------------------------------*/
/* function randomlu selects a set of attacks and assigns to pokemon */
/*---------------------------------------*/
function assignAttack() {
    var attacks = [
        ['tackle', 'quick attack', 'thunderbolt', 'water gun'],
        ['fire punch', 'sand attack', 'thundershock', 'leaf attack'],
        ['psychic', 'surf', 'earthquake', 'rock throw'],
        ['thunder punch', 'thunder', 'flamethrower', 'tail whip'],
        ['bite', 'body slam', 'bubble', 'blizzard'],
        ['fire blast', 'fly', 'fury swipes', 'ice punch'],
        ['leech seed', 'mega kick', 'ice beam', 'hyper beam'],
        ['poison gas', 'psywave', 'pin missle', 'slam'],
        ['sing', 'swift', 'spike cannon', 'wing attack'],
        ['toxic', 'vine whip', 'thunderbolt', 'hydro pump'],
    ]
    var random = Math.floor(Math.random() * 10);
    return attacks[random];
}


/*---------------------------------------*/
/* function walk displays phrase or calls on enemy */
/*---------------------------------------*/
function walk() {
    var chance = Math.floor(Math.random() * 101);
    var phrases = [
        '\nProfessor Oak needs those pokemon, I better keep looking.\n',
        '\nThe weather is nice here, way cooler than Utah.\n',
        `\nI wonder what's for lunch today.\n`,
        `\nThose busch light boys...always up to no good.\n`,
        `\nTeam Rocket...always up to no good.\n`,
        `\nWhat a beautiful day to stroll around\n`,
        `\nMy legs are itcy from the tall grass\n`,
        `\nWhat was that sound? might be a pokemon, I better keep looking.\n`
        ]
    if(chance > 10 && chance <= 40){
        return 'pokemon'
    } else if(chance < 10 ){
        return 'boss'
    } else {
        console.log(phrases[Math.floor(Math.random() * 8)])
    }
}

/*---------------------------------------*/
/* randomly selects an enemy */
/*---------------------------------------*/
function wildPokemon() {
    var chance = Math.floor(Math.random() * 22);
    var currentPokemon = pokemons[chance];
    console.log(`\nA wild ${currentPokemon.name} appeared!`)
    currentPokemon.sound()
    return currentPokemon;
}

/*---------------------------------------*/
/* battle simulator */
/*---------------------------------------*/
function battle(friend, baddie) {
    var turn = true;
    var enemy = new Pokemon(baddie.name, baddie.health, baddie.attack, baddie.defense)
    enemy.attacks = assignAttack();
    var isCaptured = false;
    var isOver = false;

    while(!isOver){
        if(turn){
            console.log(`select ${friend.name}'s attack`)
            var i = readline.keyInSelect(friend.attacks, 'select attack')
            while(i < 0){
                console.log(`select ${friend.name}'s attack`)
                i = readline.keyInSelect(friend.attacks, 'select and attack')
            }
            var atk = friend.attacks[i];
            myClear()
            var ret = damageCalculator(friend, enemy)
            enemy = ret[0]
            var damage = ret[1]
            console.log(`\nyour ${atk} attack inflicted ${damage} damage!\n`)
            printBattleLog(friend, enemy)

            if(enemy.health <= 0){
                enemy.health = 0;
                console.log(`\nYou defeated ${enemy.name}`)
                console.log(`\n\n** ${enemy.name} dropped something ** takes item and stores it in PokeBag **\n\n`)
                isOver = true;
            } 
            turn = false;
        } else {
            var ret = damageCalculator(enemy, friend)
            friend = ret[0];
            console.log(`\n${enemy.name}'s ${atk} attack inflicted ${ret[1]} damage!\n`)
            printBattleLog(friend, enemy)
            turn = true;
            if(friend.health <= 0){
                friend.health = 0;
                console.log(`${enemy.name} defeated ${friend.name}`)
                printBattleLog(friend, enemy)
                isOver = true;
            }
        }
    }
}

/*---------------------------------------*/
/* runaway functon */
/*---------------------------------------*/
function runAway(friend, enemy) {
    var chance = Math.floor(Math.random() * 2)
    if(chance === 1){
        console.log('You got away safely!')
    } else {
        var dmg = enemy.attack * (Math.floor(Math.random() * 2) + 1);
        console.log(`${enemy.name} caused ${dmg} damage to ${friend.name} before you got away`)
        friend.health -= dmg;
    }
}

/*---------------------------------------*/
/* randomly selects generated items after defeating enemies */
/*---------------------------------------*/
function droppedItem(){
    var rand = Math.floor(Math.random() * 2) 
    return items[rand]
}

/*---------------------------------------*/
/* prints the status of pokemon during battle */
/*---------------------------------------*/
function printBattleLog(friend, enemy){
    lineBreak()
    if(friend.health < 0){
        friend.health = 0
    }
    if(enemy.health < 0){
        enemy.health = 0
    }
    console.log(`my pokemon: ${friend.name}'s health: \n${friend.health}`)
    lineBreak()
    console.log(`enemy pokemon: ${enemy.name}'s health: \n${enemy.health}`)
    thinking()
}

/*---------------------------------------*/
/* calculates the damage from batlle */
/*---------------------------------------*/
function damageCalculator(friend, enemy){
    var dmg = friend.attack * (Math.floor(Math.random() * 2) + 1);
    enemy.health -= dmg;
    if(enemy.health <= 0){
        return [enemy, dmg]
    } else {
        return [enemy, dmg];
    }
}


function myClear(){
    console.log("\n\n/**********************************************************************************************************************************/\n/**********************************************************************************************************************************/\n/**********************************************************************************************************************************/\n\n")
}

function lineBreak(){
    console.log('|--------------------------------|')
}

function thinking(){
    console.log('*\n**\n***\n****\n*****')
}



module.exports = {
    droppedItem: droppedItem,
    lineBreak: lineBreak,
    myClear: myClear,
    assignAttack: assignAttack,
    capture: capture,
    showStats: showStats,
    walk: walk,
    wildPokemon: wildPokemon,
    battle: battle,
    runAway: runAway
}
