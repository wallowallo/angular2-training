'use strict';
'format es6'; // force SystemJS to transpile exercise
//to refactor into es6 standard with classes and template strings
function write(text) {
  var element = document.getElementById('example');
  element.innerHTML = text;
}

var age = 900;

write('Yoda is ' + age + ' years old');

//the refactor
class text {
  let element = document.getElementById('example');
  write(string) {
    this.element.innerHTML = string;
  }
}

let age = 900;

write(`Yoda is ${age} years old`);
