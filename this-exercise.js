'use strict';
'format es6'; // force SystemJS to transpile exercise

class MyDiv {
  constructor(selector) {
    this.element = document.getElementById(selector);
  }

  write(text) {
    this.element.innerHTML = text;
  }
}

var example = new MyDiv('example');
var write = example.write.bind(example);

write('This is Fixed');
// we use .bind() to get to the this.example created by new MyDiv
// then we can use that as a normal function call to get to the write(text)
