var btn = document.getElementById('clicker')
var rst = document.getElementById('reset')
var display = document.getElementById('container')
var num = document.createElement("h1")
var count = 0;


count = localStorage.getItem("c")
num.textContent = count
display.appendChild(num)


btn.addEventListener('click', main)

function main(){
    count++;
    num.textContent = count
    display.appendChild(num)
    localStorage.c = count
}

rst.addEventListener('click', function(){
    count = 0;
    num.textContent = 0
    display.appendChild(num)
    localStorage.c = count
})


setTimeout(timer, 3000)

function timer(){
    btn.removeEventListener('click', main)
}







