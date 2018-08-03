var readline = require('readline-sync')

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
var currentEnemy;

var mewtwo = new Pokemon('MewTwo', 50, 15, 20, '"yoooooo!"')
var taurus = new Pokemon('Taurus', 40, 10, 9, '"moooooo!"')
var mankey = new Pokemon('Mankey', 30, 10, 7, '"oo aaa ooo aaaa!"')
var pikachu = new Pokemon('Pikachu', 25, 5, 5, '"pika pika!"')
var ratatoulli = new Pokemon('Ratatoulli', 30, 5, 5, '"rat tat tat!"')
var pidgey = new Pokemon('Pidgey', 30, 5, 5, '"eeee!"')
var butterfree = new Pokemon('Butterfree', 25, 5, 5, '"wooosh"')
var bulbasor = new Pokemon('Bulbasor', 50, 10, 20, '"bulbaaaa"')
var charmander = new Pokemon('Charmander', 50, 10, 20, '"arrrrrghh"')
var squirtle = new Pokemon('Squirtle', 50, 10, 20, '"squirttttle"')

var pokemons = [mewtwo, taurus, mankey, pikachu, ratatoulli, pidgey, butterfree, bulbasor, charmander, squirtle]

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

function showStats(pokemon){
    console.log(`\n${pokemon.name}'s stats: \nhealth: ${pokemon.health} \nattack: ${pokemon.attack}\ndefense: ${pokemon.defense}\n`)
}

function assignAttack() {
    var attacks = [
        ['tackle', 'quick attack', 'thunderbolt', 'water gun'],
        ['fire punch', 'sand attack', 'thundershock', 'leaf attack'],
        ['psychic', 'surf', 'earthquake', 'rock throw'],
        ['thunder punch', 'thunder', 'flamethrower', 'tail whip'],
    ]
    var random = Math.floor(Math.random() * 4);
    return attacks[random];
}
/**
 * function walk()
 * return
 */

function walk() {
    var chance = Math.floor(Math.random() * 101);
    var phrases = [
        '\nProfessor Oak needs those pokemon, I better keep looking.\n',
        '\nThe weather is nice here, way cooler than Utah.\n',
        `\nI wonder what's for lunch today.\n`,
        `\nThose busch light boys...always up to no good.\n`]
    if(chance > 10 && chance <= 40){
        return 'pokemon'
    } else if(chance < 10 ){
        return 'boss'
    } else {
        console.log(phrases[Math.floor(Math.random() * 4)])
    }
}

function wildPokemon() {
    var chance = Math.floor(Math.random() * 10);
    var currentPokemon = pokemons[chance];
    console.log(`\nA wild ${currentPokemon.name} appeared!`)
    currentPokemon.sound()
    return currentPokemon;
}

function battle(friend, baddie) {
    var turn = true;
    var enemy = new Pokemon(baddie.name, baddie.health, baddie.attack, baddie.defense)
    enemy.attacks = assignAttack();
    var isCaptured = false;

    while(enemy.health > 0 || !isCaptured || friend.health > 0){
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
            enemy = ret[0];
            if(enemy.health < 0){
                enemy.health = 0;
                console.log(`You defeated ${enemy.name}`)
                printBattleLog(friend, enemy)
            } else {
                console.log(`\nyour ${atk} attack inflicted ${ret[1]} damage!\n`)
                printBattleLog(friend, enemy)
                turn = false;
            }
        } else {
            for(var i = 0; i < 3; i++){
                console.log('*')
            }
            var ret = damageCalculator(enemy, friend)
            friend = ret[0];
            if(friend.health < 0){
                friend.health = 0;
                console.log(`${enemy.name} defeated ${friend.name}`)
                printBattleLog(friend, enemy)
            } else {
                console.log(`\n${enemy.name}'s ${atk} attack inflicted ${ret[1]} damage!\n`)
                printBattleLog(friend, enemy)
                turn = true;
            }
        }
    }
}

function printBattleLog(friend, enemy){
    lineBreak()
    console.log(`my pokemon: ${friend.name}'s health: \n${friend.health}`)
    lineBreak()
    console.log(`enemy pokemon: ${enemy.name}'s health: \n${enemy.health}`)
    lineBreak()
}

function damageCalculator(friend, enemy){
    var dmg = friend.attack * (Math.floor(Math.random() * 2) + 1);
    enemy.health -= dmg;
    if(enemy.health <= 0){
        return '-1'
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



module.exports = {
    lineBreak: lineBreak,
    myClear: myClear,
    assignAttack: assignAttack,
    capture: capture,
    showStats: showStats,
    walk: walk,
    wildPokemon: wildPokemon,
    battle: battle

}
