var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText)
        console.log(data)
        displayData(data)
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)
xhr.send()

function displayData(data){
    var display = document.getElementById('list')
    var h1 = document.createElement('h1')
    h1.textContent = 'Look at all these chickens'
    display.appendChild(h1)

    var pokeArr = data.objects[0].pokemon
    pokeArr.sort(function(a, b) {
        if(a.name > b.name) return 1
        if(a.name < b.name) return -1
        return 0
    })
    for(var i = 0; i < pokeArr.length; i++){
        var li = document.createElement('li')
        var cap = pokeArr[i].name[0].toUpperCase()
        li.textContent = cap + pokeArr[i].name.slice(1)
        display.appendChild(li)
    }
    var dStyle = display.style
    dStyle.textAlign = 'center'
    dStyle.backgroundColor = 'yellow'
    dStyle.listStyle = 'none'
    dStyle.fontFamily = 'sans-serif'
    dStyle.fontSize = '150%'
}

var search = document.getElementById('pokeSearch')



search.addEventListener('submit', function(){
    var look = document.getElementById('name').value
      
})