var djBtn = document.getElementById('dj-btn')
var resetBtn = document.getElementById('reset-btn')

djBtn.addEventListener('mousedown', function(){
    djBtn.style.backgroundColor = 'red'
    djBtn.textContent = 'pressed down'
})

djBtn.addEventListener('dblclick', function(){
    djBtn.style.backgroundColor = 'green'
    djBtn.textContent = 'double clicked'
})

djBtn.addEventListener('mouseup', function(){
    djBtn.style.backgroundColor = 'yellow'
    djBtn.textContent = 'mouse up'
})

djBtn.addEventListener('mouseover', function(){
    djBtn.style.backgroundColor = 'blue'
    djBtn.textContent = 'hover'
})

djBtn.addEventListener('mouseleave', function(){
    djBtn.style.backgroundColor = 'white'
    djBtn.textContent = 'unhover'
})

document.addEventListener('wheel', function(){
    djBtn.style.backgroundColor = 'orange'
    djBtn.textContent = 'scroll active'
})

// Reset Dj btn
resetBtn.addEventListener('click', function(){
    djBtn.style.removeProperty('background-color')
    djBtn.textContent = 'unclicked'
})


document.addEventListener('keydown', function(event){
    var x = event.keyCode || event.which
    console.log(x);
    switch(x) {
        case 81: 
            djBtn.style.backgroundColor = '#51484f'
            djBtn.textContent = 'Quartz'
            break;
        case 87: 
            djBtn.style.backgroundColor = '#F5DEB3'
            djBtn.textContent = 'Wheat'
            break;
        case 69: 
            djBtn.style.backgroundColor = '#50C878'
            djBtn.textContent = 'Emerald Green'
            break;
        case 82: 
            djBtn.style.backgroundColor = 'red'
            djBtn.textContent = 'Red'
            break;
        case 84: 
            djBtn.style.backgroundColor = '#D2B48C'
            djBtn.textContent = 'Tan'
            break;
        case 89: 
            djBtn.style.backgroundColor = 'yellow'
            djBtn.textContent = 'Yellow'
            break;
        case 85: 
            djBtn.style.backgroundColor = '#120a8f'
            djBtn.textContent = 'Ultramarine'
            break;
        case 73: 
            djBtn.style.backgroundColor = 'indigo'
            djBtn.textContent = 'Indigo'
            break;
        case 79: 
            djBtn.style.backgroundColor = 'orange'
            djBtn.textContent = 'Orange'
            break;
        case 80: 
            djBtn.style.backgroundColor = 'pink'
            djBtn.textContent = 'Pink'
            break;
        case 65: 
            djBtn.style.backgroundColor = '#9966CC'
            djBtn.textContent = 'Amethyst'
            break;
        case 83: 
            djBtn.style.backgroundColor = '#FF2400'
            djBtn.textContent = 'Scarlet'
            break;
        case 68: 
            djBtn.style.backgroundColor = '#f0e130'
            djBtn.textContent = 'Dandelion'
            break;
        case 70: 
            djBtn.style.backgroundColor = '#EEDC82'
            djBtn.textContent = 'Flax'
            break;
        case 71: 
            djBtn.style.backgroundColor = '#465945'
            djBtn.textContent = 'Gray-asparagus'
            break;
        case 72: 
            djBtn.style.backgroundColor = '#3FFF00'
            djBtn.textContent = 'Harlequin'
            break;
        case 74: 
            djBtn.style.backgroundColor = '#d88d3c '
            djBtn.textContent = "Jack O'Lantern Orange"
            break;
        case 75: 
            djBtn.style.backgroundColor = '#882d17'
            djBtn.textContent = "Kobe, Sienna"
            break;
        case 76: 
            djBtn.style.backgroundColor = '#C8A2C8'
            djBtn.textContent = "Lilac"
            break;
        case 90: 
            djBtn.style.backgroundColor = '	#E9FFDB'
            djBtn.textContent = "Nyanza"
            break;
        case 88: 
            djBtn.style.backgroundColor = '#030303'
            djBtn.textContent = "grey1"
            break;
        case 67: 
            djBtn.style.backgroundColor = '#7FFF00'
            djBtn.textContent = "Chartreuse"
            break;
        case 86: 
            djBtn.style.backgroundColor = '#324ab2'
            djBtn.textContent = "Violet-blue"
            break;
        case 66: 
            djBtn.style.backgroundColor = '#900020'
            djBtn.textContent = "Burgundy"
            break;
        case 78: 
            djBtn.style.backgroundColor = '#FFDEAD'
            djBtn.textContent = "Navajo white"
            break;
        case 77: 
            djBtn.style.backgroundColor = '#F8F4FF'
            djBtn.textContent = "Magnolia"
            break;
    }

})

