var calc = document.calc
var operations
var num1
var num2
var ans
var clearFlag = 0;
var result = ''

document.querySelectorAll('input').addEventListener('keydown', function(){
    document.querySelectorAll('input').style.backgroundColor = 'grey'
})

document.getElementById('btn-c').onclick = function(){
    if(clearFlag === 0){
        clearCalc()
        clearflag = 1
    } else {
        allClearCalc()
        clearflag = 0
    }
}

function clearCalc(){
    result = ''
    document.getElementById('result').textContent = result;
    document.getElementById('btn-c').value = 'AC';
    clearFlag = 1;
}

function allClearCalc(){
    document.getElementById('btn-c').value = 'C';
    num1 = 0;
    num2 = 0;
    ans = 0;
    clearFlag = 0;
}

document.getElementById('btn-1').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0
    
    if(result.length > 5){
        alert('max numbers entered.');
    } else {
        result += '1'
        document.getElementById('result').textContent = result;
    }
}

document.getElementById('btn-2').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(result.length > 5){
        alert('max numbers entered.');
    } else {
        result += '2'
        document.getElementById('result').textContent = result;
    }
}
document.getElementById('btn-3').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(result.length > 5){
        alert('max numbers entered.');
    } else {
        result += '3'
        document.getElementById('result').textContent = result;
    }
}
document.getElementById('btn-4').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(result.length > 5){
        alert('max numbers entered.');
    } else {
        result += '4'
        document.getElementById('result').textContent = result;
    }
}
document.getElementById('btn-5').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(result.length > 5){
        alert('max numbers entered.');
    } else {
        result += '5'
        document.getElementById('result').textContent = result;
    }
}
document.getElementById('btn-6').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(result.length > 5){
        alert('max numbers entered.');
    } else {
        result += '6'
        document.getElementById('result').textContent = result;
    }
}
document.getElementById('btn-7').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(result.length > 5){
        alert('max numbers entered.');
    } else {
        result += '7'
        document.getElementById('result').textContent = result;
    }
}
document.getElementById('btn-8').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(result.length > 5){
        alert('max numbers entered.');
    } else {
        result += '8'
        document.getElementById('result').textContent = result;
    }
}
document.getElementById('btn-9').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(result.length > 5){
        alert('max numbers entered.');
    } else {
        result += '9'
        document.getElementById('result').textContent = result;
    }
}

document.getElementById('btn-+').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(num1) {
        num2 = Number(result)
    } else {
        num1 = Number(result)
    }
    
    result = ''
    operations = '+'
}
document.getElementById('btn--').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(num1) {
        num2 = Number(result)
    } else {
        num1 = Number(result)
    }
    
    result = ''
    operations = '-'
}

document.getElementById('btn-x').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(num1) {
        num2 = Number(result)
    } else {
        num1 = Number(result)
    }
    result = ''
    operations = '*'
}

document.getElementById('btn-/').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    if(num1) {
        num2 = Number(result)
    } else {
        num1 = Number(result)
    }
    result = ''
    operations = '/'
}

document.getElementById('btn-=').onclick = function(){
    document.getElementById('btn-c').value = 'C';
    clearFlag = 0

    num2 = Number(result)
    ans = 0;
    switch(operations) {
        case '+':
            ans = num1 + num2;
            break;
        case '-':
            ans = num1 - num2;
            break;
        case '*':
            ans = num1 * num2;
            break;
        case '/':
            ans = num1 / num2;
            break;
        default: 
            alert('error')
    }
    document.getElementById('result').textContent = ans;
    num1 = ans;
}