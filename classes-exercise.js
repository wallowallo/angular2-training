'use strict';
'format es6'; // force SystemJS to transpile exercise
//refactor to es6 without functions or prototype
function MyDiv(selector) {
  this.element = document.getElementById(selector);
}

MyDiv.prototype.write = function write(text) {
  this.element.innerHTML = text;
};
var example = new MyDiv('example');
example.write('Welcome To ngCourse!');

//refactored
class MyDiv {
    constructor(selected) {
      this.element = document.getElementById(selected);
    }
    write(text) {
      return this.element.innerHTML = text;
    }
}
let example = new MyDiv('div1');
example.write('hello');
