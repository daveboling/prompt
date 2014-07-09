var prompt = require('sync-prompt').prompt;

console.log('Welcome to the BMI calculator!');
var weight = prompt('What is your current weight?');
var feet = prompt('What is yout height in feet');
var inches = prompt('What is your height in inches?');
var height =  (parseInt(feet) * 12) + parseInt(inches);
weight = parseInt(weight);

var bmi = (weight / height) * 10;

console.log((Math.round(bmi*10)/10));

