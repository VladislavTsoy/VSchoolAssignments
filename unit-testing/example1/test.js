var chai = require('chai')
var assert = chai.assert

var myFuncs = require('./app.js')
var addS = myFuncs.addS

//new keywords: describe & it

describe(`Create a function that adds an 's' to the end of every word in an array`, function(){
    it(`it should end with an s`, function(){
        assert.deepEqual(addS(['dog','cat','alligator']), ['dogs', 'cats', 'alligators'])
    })
    it(`it should not allow numbers into the array`, function(){
        assert.deepEqual(addS(['dogs', 0, 3]), `no numbers`)
    })
    it(`it should not add an s if the word ends with an s`, function(){
        assert.deepEqual(addS(['dogs', 'cat', 'bats']), ['dogs', 'cats', 'bats'])
    })
})