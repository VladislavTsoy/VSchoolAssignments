class Player{
    constructor(name, totalCoins, status){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = false
        this.gameActive = true
    }

    setName(name) { 
        this.name = name 
    }

    gotHit() {
        switch (this.status) {
            case 'Powered Up': 
                console.log('Your star protected you!')
                this.status = 'Big'
                break
            case 'Big':
                this.status = 'Small'
                break
            case 'Small':
                console.log(`GAME OVER!`)
                this.status = 'Dead'
                this.gameActive = false
                break
            default: console.log('what?')
        }
        this.print()
    }

    gotPowerup() {
        switch(this.status) {
            case 'Small': 
                this.status = 'Big'
                break
            case 'Big': 
                this.status = 'Powered Up'
                break
            case 'Powered Up':
                console.log('Congratulations! You got a star!')
                this.status = 'Powered Up'
                break
            default: console.log('wut?')
        }
        this.print()
    }

    addCoin() {
        this.totalCoins +=1
        this.print()
    }

    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\n`)
    }
}

function randomRange(){
    if(yoshi.gameActive === false) {
        clearInterval(intervalId)
        return
    }
    var res = Math.floor(Math.random() * 3)
    switch (res) {
        case 0: 
            yoshi.gotHit()
            break
        case 1: 
            yoshi.gotPowerup()
            break
        case 2: 
            yoshi.addCoin()
            break
    }


}

const yoshi = new Player('Yoshi', 0, 'Big') 
var intervalId = setInterval(randomRange, 1000)

