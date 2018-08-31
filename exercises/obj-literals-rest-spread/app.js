// 1. Rest Operator

const collectAnimals = (...arr) => arr
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")

// 2. Array Object Literals

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrot"];
const food = {fruit, sweets, vegetables}

// 3. Destructing Object

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
var {location, duration} = vacation

// 4. Destructing Array
// const firstItem = items[0];
const arr = ["dog", "cat", "mouse", "jackolope", "platypus"]
const [dog, cat] = arr

// 5. Destructuring Array

const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"]

const [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder

// console.log("My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav)

// 6. ES6exy

const combineAnimals = (a, b, c) => {  
    return [...a, ...b, ...c]
}

const realAnimals = ["dog", "cat", "mouse"]
const magicalAnimals = ["jackolope"]
const mysteriousAnimals = ["platypus"]

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// const product = (a, b, c, d, e) => {  
//     let numbers = [a,b,c,d,e];
//     return numbers.reduce((acc, number) => {
//       return acc * number;
//     }, 1)
//   }

const product = (a, b, c, d, e) => [a,b,c,d,e].reduce((acc, num) => acc * num, 1)

// 7. ES6exy
const unshift = (array, a, b, c, d, e) => [a, b, c, d, e, ...array]

// 8. Object Literals

const populatePeople = names => names.map(name => { name = name.split(" ");
                                                    let [firstName, lastName] = name
                                                    return {
                                                        firstName,
                                                        lastName
                                                    }
                                                })


console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
