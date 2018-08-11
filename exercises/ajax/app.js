// JavaScript
    //document.
    // How to create HTML elements
    //     var h1 = document.createElement('h1')
    //     var display = document.getElementById('list')
    // // How to append HTML elements
    //     h1.innerHTML = "<span>helloooo</span>"
    //     display.appendChild(h1)
// C-R-U-D:

    // POST:    CREATE
    // GET:     READ
    // PUT:     UPDATE
    // DELETE:  DELETE

// AJAX - Asynchronous JavaScript and XML (eXtensible Markup language)

    // ready state, onreadystatechange
var xhr = new XMLHttpRequest()
console.log(xhr)

xhr.onreadystatechange = function(){
    console.log(xhr)
    if(xhr.readyState == 4 && xhr.status == 200) {
        // parsing
        var data = JSON.parse(xhr.responseText)
        displayData(data)
        
    } 
}
// args
// 1. request type
// 2. URL
// 3. isAsynxhronous? true:false
xhr.open("GET", "https://swapi.co/api/people/1", true )
xhr.send()


function displayData(data) {
    var display = document.getElementById('list')
    display.innerHTML = `
                        <h1 class='box'>${data.name}</h1>
                        <p> Eye Color: ${data.eye_color}</p>
                        <p> Hair Color: ${data.hair_color}</p>
                        `
    display.style.backgroundColor = data.eye_color
    display.classList.add(anotherClass)
}