function write() {
  const element = document.getElementById('example');

  let output = arguments[0].toUpperCase();
  let i;

  for (i = 1; i < arguments.length; i += 1) {

    output +=  ' ' + arguments[i];
  }

  element.innerHTML = output;
}

write('JavaScript', 'For', 'Life');

// using rest operator refactor
function write(a, ...args) {
  const element = document.getElementById('example');
  const output = [a.toUpperCase(), ...args].join();
  element.innerHTML = output;
}

write('JavaScript', 'For', 'Life');
