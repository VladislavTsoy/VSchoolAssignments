//Preliminaries
var a = 5;
var b = 3;

if(a > b){
    console.log(a + ' is greater than ' + b);
}

var cat = 'cat';
if(cat.length === b){
    console.log(b + ' is the length of ' + cat);
}

var dog = 'dog';

if(cat === dog){
    console.log(cat + ' is the same ' + dog);
}

// Bronze 
var person = {
    name: 'Bobby',
    age: 12
}

if(person.age > 18){
    console.log(person.name + ' is allowed to go to the movies.');
} else {
    console.log(person.name + 'is not allowed to go to the movies.');
}

// 1.
if(person.name[0] === 'B'){
    console.log('persons name starts with a B');
} else {
    console.log('persons name does not start with a B');
}

// 2.
if(person.name[0] === 'B' && person.age > 18){
    console.log('persons name starts with a B and is over 18 yo');
} else {
    console.log('persons name does not start with a B or is under 18 yo');
}

// Silver

var x = 1;
var z = '1';

// 1.
if(x === z){
    console.log('strict');
} else if(x == z){
    console.log('loose');
} else {
    console.log('not equal at all');
}

// 2.

var i = 1;
var j = 2;
var k = 4;


if((i <= j && j === k) || ((3 * 4) > 10 && (5 + 10) > 10)){
    console.log('yes');
} 

// Gold

var str = true;
var check;

// 1.
if(typeof dog === 'string'){
    console.log('yes');
} else {
    console.log('no');
}

// 2.
if(typeof str === 'boolean'){
    console.log('yes');
} else {
    console.log('no');
}
// 3.
if(check){
    console.log('variable is defined');
} else {
    console.log('variable is undefined');
}

// 4.
var num = 12;
var letter = 's';
if(letter > num){
    console.log('greater than');
} else if(letter < num){
    console.log('less than');
} else {
    console.log('equals');
}

// 5.

var myNum = 10;

var result = (myNum % 2 === 0) ? 'even' : 'odd';


console.log(result);



