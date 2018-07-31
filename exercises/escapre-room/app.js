var readline = require('readline-sync')

var name = readline.question('Welcome to the escape room, what is your name? ')
console.log(`Hello ${name}, wanna play a game? escape the room or be trapped forever!`)
var isAlive = true
var hasKey = false
var options = ['Put hand in hole', 'Find the key', 'Open the door']

while(isAlive) {
    var choice = readline.keyInSelect(options, 'choose wisely: ')
    var op = options[choice]
    if(op === 'Open the door'){
        if(hasKey){
            console.log('I escaped the room! YOU WIN!')
            isAlive = false;
        } else {
            console.log('hmm...the door is locked')
        }
    } else if(op === 'Find the key'){
        console.log('I found the key!')
        hasKey = true;
    } else if(op === 'Put hand in hole'){
        isAlive = false;
        console.log('Oh no! you have fallen into a trap. GAME OVER!');
    }   
}