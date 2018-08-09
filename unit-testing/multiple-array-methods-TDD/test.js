var chai = require('chai')
var myData = require('./app.js')


var assert = chai.assert

var people = myData.people
var olderThan18 = myData.olderThan18
var over18 = myData.over18
var sortByLast = myData.sortByLast
var sortedByLast = myData.sortedByLast
var ulList = myData.ulList
var ulTags = myData.ulTags

describe(`Generate the following lists`, function(){
    it(`Generate a list of people over 18`, function(){
        assert.deepEqual(olderThan18(people), over18)
    })

    it(`Generates a list sorted by last name`, function(){
        assert.deepEqual(sortByLast(people), sortedByLast)
    })

    it(`Generate a list with each name and age with li tags`, function(){
        assert.deepEqual(ulTags(people), ulList)
    })
})

