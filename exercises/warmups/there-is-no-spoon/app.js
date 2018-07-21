var laptop = {
    model: "MacBook Pro",
    year: 2018,
    isNew: true,
    write: function () {
        console.log('This is a laptop.');
    }
}

var coffee = {
    type: "Colombian",
    isCaf: true,
    quantity: 3,
    write: function() {
        console.log('This is coffee');
    }
}

var basketballHoop = {
    backboard: "wood",
    isStable: false,
    cost: 100,
    write: function() {
        console.log('This is a hoop.');
    }
}

var monitor = {
    model: 'Asus',
    color: 'black',
    isOn: false,
    write: function(){
        console.log('This is a monitor.');
    }
}

var projector = {
    model: 'benq',
    color: 'white',
    isOn: true,
    write: function() {
        console.log('This is a projector');
    }
}

var door = {
    type: 'wood',
    color: 'brown',
    isOpen: false,
    write: function() {
        console.log('This is a door.');
    }
}

var instructor = {
    name: 'Nate',
    age: 28,
    yearOfBirth: 1990,
    write: function() {
        console.log('I am an instructor.');
    }

}

var student = {
    name: 'Vlad',
    age: 28,
    yearOfBirth: 1990,
    write: function(){
        console.log('I am a student at VSchool');
    }
}

var food = {
    type: ['banana', 'mandarines'],
    totalCost: 20,
    isGood: true,
    available: function() {
        console.log('We currently have in stock ');
        for(var i = 0; i < this.type.length; i++){
            if(i === this.type.length - 1){
                console.log(this.type[i] + '.');
            } else {
                console.log(this.type[i] + ', ');
            }
        }
    }
}

var table = {
    type: 'wood',
    legs: 4,
    color: 'white',
    isFull: false,
    write: function() {
        console.log('This is a table');
    }
};

door.write();