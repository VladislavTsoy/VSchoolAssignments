function getSum(a, b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b
    } else {
        throw 'inputs must be numbers'
    }
}

try {
    console.log(getSum(5, 4))
} catch(error) {
    console.log(error)
}

var user = {
    username: 'Sam',
    password: 'password'
}

function login(profile, username, password) {
    if(profile.username === username && profile.password === password)
        console.log('logged in!')
    else if(profile.username !== username)
        throw 'incorrect username'
    else if(profile.password !== password)
        throw 'incorrect password'
}


try {
    login(user, 'Sam', 'passwors')
} catch(error){
    console.log(error)
}

