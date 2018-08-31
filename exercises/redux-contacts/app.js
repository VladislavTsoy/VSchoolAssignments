var redux = require('redux')

class Person {
    constructor(name, phone, email) {
        this.name = name
        this.phone = phone
        this.email = email
    }
}

let state = {
    contacts: []
}

function addObj(obj) {
    return {
        type: "ADD_OBJ",
        obj: obj
    }
}

function remove(objName) {
    return {
        type: "REMOVE_OBJ",
        objName: objName
    }
}

function reducer(prevState = state, action) {
    switch(action.type) {
        case 'ADD_OBJ':
            return {
                contacts: [...prevState.contacts, action.obj]
            }
        
        case 'REMOVE_OBJ':
            return {
                contacts: prevState.contacts.filter(person => person.name !== action.objName)
            }
        default:
            return prevState
    }
}

var store = redux.createStore(reducer)

store.subscribe(function() {
    console.log(store.getState())
})

var tom = new Person('Tommy Oliver', '123-456-7890', "thegreen@pr.com")
var boris = new Person('Boris Doris', '123-456-0987', "theasd@pr.com")
var frank = new Person('Frank the Tank', '123-654-0987', "thetankthetank@pr.com")
var tank = new Person('Tank the Frank', '321-456-0987', "thefrankhotdog@pr.com")


store.dispatch(addObj(tom))
store.dispatch(addObj(boris))
store.dispatch(addObj(frank))
store.dispatch(addObj(tank))

store.dispatch(remove('Boris Doris'))