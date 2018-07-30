var form = document.travelForm

form.addEventListener('submit', function(e){
    e.preventDefault();

    var destArr = []
    var dietArr = []
    // name-age text fields
    var fName = form.fName.value;
    var lName = form.lName.value;
    var age = form.age.value;

    // gender radio fields
    var gender = form.gender.value;

    // destination check fields
    var dest = document.querySelectorAll('input[name=loc]:checked')
    for(var i = 0; i < dest.length; i++){
        destArr.push(dest[i].value)
    }

    // dietary check fields
    var diet = document.querySelectorAll('input[name=diet]:checked')
    for(var i = 0; i < diet.length; i++){
        dietArr.push(diet[i]. value)
    }

    alert(`Flyer Information:
        \n
        First name: ${fName} \n 
        Last name: ${lName} \n
        Age: ${age} \n
        Gender: ${gender} \n
        Location: ${destArr} \n
        Dietary restriction: ${dietArr}`);
})