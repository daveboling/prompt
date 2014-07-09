//require is used to for node_modules so that we can use
//it in our code.
var prompt = require('sync-prompt').prompt;

var name = prompt('What is your name? ');
console.log(name);


var color = prompt('What is your favorite color? ');
console.log(color);

var age = prompt('What is your dog\'s age? ');
age = parseInt(age) * 7;
//parseFloat(number) if you want to use a decimal
console.log(age + " is dog\'s your age.");
console.log(age / 7 + "is the dog\' human age.");


var yourAge  = prompt('What is your age? '));
yourAge = parseInt(yourAge);

if(yourAge >= 21) { console.log('You can drink'); }
else { console.log('Better find an adult buddy.'); }




