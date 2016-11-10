// var result;
// put let result; inside the scope so that result returns true in this case
// instead of an undefined value
function isOverLimit(val) {
  let result;
  const LIMIT = 5;
  if (val > LIMIT) {
    let result = true;
  } else {
    let result = false;
  }
  return result;
}

const element = document.getElementById('example');
element.innerHTML = isOverLimit(10);
