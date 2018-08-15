class Player{
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    hasStar() { 
        this.hasStar = hasStar ? true : false 
    }
    setName(name) { 
        this.name = name 
    }

    gotHit() {}

    gotPowerup() {}

    gameActive

    addCoin() {}

    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\n`)
    }
}

function randomRange(){
    return Math.floor(Math.random() * 3)
}

