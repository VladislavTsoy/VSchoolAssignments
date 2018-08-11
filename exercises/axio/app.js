// Axios - JavaScript Library (noce_module) that helps us make AJAX calls to API's

    // 1. An event (page load)
    // 2. XMLHttpRequest object is created
    // 3. The request object sends the request to the server. xhr.send()
    // 4. The server processes the request
    // 5. The server send a response back to the web page
    // 6. The response is then read by javascript


    // CRUD 
        // CREATE - POST
        // READ - GET
        // UPDATE - PUT
        // DELETE - DELETE

var axios = require('axios')
// console.dir(axios)

// Read - retrieving and reading data
axios.get('http://swapi.co/api/people/1').then(function(res){
    console.log(res)
}).catch(function(err) {
    console.log(err)
})

// Create - posting new data
axios.post(`http://swapi.co/api/people/${id}`, newData).then(function(res){
    console.log(res)
})

// Delete data
axios.delete(`http://swapi.co/api/people/${id}`)

// Update data 
axios.put(`http://swapi.co/api/people/${id}`, updatedData).then(function(res) {

})