var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


function uptown1(arr){
    console.log(arr.join(' ')) 
}

function uptown2(arr){
    console.log(arr.reverse().join(' '));
}

function uptown3(arr){
    var result = [];
    for(var i = 0; i < arr.length; i+=2){
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}

function uptown4(arr){
    for(var i = 0; i < arr.length; i+=2){
        if(i != arr.length - 1){
            var temp = arr[i];
            arr[i] = arr[i+1]
            arr[i+1] = temp;
        }
    }
    console.log(arr.join(' '));
}

uptown3(lyrics);


