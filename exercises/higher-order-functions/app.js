var cars = ['kia', 'chevy', 'nissan', 'toyota', 'ford']

// var sound = cars.forEach(function(car){
//     console.log(`${car} goes vroom.`)
// })

// console.log(sound)

var angryCars = ['angry kia', 'angry chevy', 'hungry nissan', 'hungry toyota', 'hangry ford']

var angry = angryCars.map(function(car){
    return car.toUpperCase();
})  

// console.log(angry)

var cars = [
    {
        name: 'kia',
        year: 2012,
        model: 'optima'
    },
    {
        name: 'volkswagon',
        year: 2001,
        model: 'passat'
    },
    {
        name: 'triumph',
        year: 2012,
        model: 'daytona 675r'
    }
]

var newCars = cars.filter(function(car){
    if(car.year > 2005) {
        return car;
    }
})

// console.log(newCars)

var findModel = cars.find(function(car) {
    return car.model === 'passat'
})

// console.log(findModel)

var someModel = cars.some(function(car) {
    return car.model === 'daytona 675r'
})

// console.log(someModel)

var allModels = cars.every(function(car){
    return car.model === 'optima'
})

// console.log(allModels)
y2 = 0
var year2012 = cars.reduce(function(y2, car) { 
        if(car.year === 2012) {
            return y2 + 1 
        }
        return y2
    }, 0)

// console.log(year2012)



var getYears = cars.reduce(function(a, car){
    if(car.year === 2012){
        if(a.y2012){
            a.y2012 += 1
        } else {
            a.y2012 = 1
        }
    } else if(car.year === 2001){
        if(a.y2001){
            a.y2001 + 1
        } else {
            a.y2001 = 1
        }
    }
    return a
}, {})

// console.log(getYears)



