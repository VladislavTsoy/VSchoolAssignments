var form = document.baddiesCalc;

form.addEventListener('submit', function(e){
    e.preventDefault();

    var goom = Number(form.gPrice.value) * 5
    var bom = Number(form.bPrice.value) * 7
    var che = Number(form.cPrice.value) * 11
    

    if(goom < 0 ){
        alert('please enter 0 or a positive number for Goombas!')
    } else if(bom < 0){
        alert('please enter 0 or a positive number for Bob-ombs!')
    } else if(che < 0){
        alert('please enter 0 or a positive number for Cheep-cheeps!')
    }

    var result = goom + bom + che
    console.log(result);

    document.getElementById('cost').textContent = result;
    document.querySelector('.anim').style.display = 'flex';
    document.querySelector('.anim').style.transition = '.3s';
    setTimeout(closeWindow, 3000);
})

function closeWindow(){
    document.querySelector('.anim').style.display = 'none';
    document.querySelector('.anim').style.transition = '.3s';
}


