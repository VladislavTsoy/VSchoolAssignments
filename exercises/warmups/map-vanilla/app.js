const data = [
    {
        name: "John Snow"
    },
    {
        name: "Cersei Lannister"
    },
    {
        name: "Hodor"
    },
    {
        name: "Tywin Lannister"
    },
    {
        name: "The Mother of Dragons"
    },
    {
        name: "White Walker"
    }
]

let root = document.getElementById('root')

for(let i = 0; i < data.length; i++) {
    let h3 = document.createElement('h3')
    h3.innerHTML = data[i].name
    root.appendChild(h3)
}

