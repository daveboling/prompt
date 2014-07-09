var prompt = require('sync-prompt').prompt;

var temp = prompt('What temp would you like to convert? (F or C)');
if(temp === 'F') { console.log('Going from F to C. What degree in F?: '); }
else {console.log('Going from C to F. What degree in C?: '); }
var temp2 = prompt('');
var alt;

temp2 = parseInt(temp2);
var convert = 0;

if ( temp === 'C' ){//C to F
  convert = ( temp2  * 9)/5 + 32;
  alt = 'F';
} 
else if ( temp === 'F' ){//F to C
  convert = (temp2 - 32) * 5/9 ;
  alt = 'C';
}

console.log('Your converted temp is: ' + convert + alt);

