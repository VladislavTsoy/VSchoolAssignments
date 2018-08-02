var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = '';

while(options[option] !== 'fight bears') {
  option = ask.keyInSelect(options, "What would you like to do today?: ");
  if(options[option] === 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet.");
  } else {
    console.log("You shoot guns.");
  } 
}

console.log("You fought a bear and got beat up!");
 