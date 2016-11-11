//console.js
export function write() {
  const args = Array.prototype.slice.call(arguments, 0);
  console.log.apply(console, args);
}

//dom.js
export function write() {
  const args = Array.prototype.slice.call(arguments, 0);
  const element = document.getElementById('example');
  element.innerHTML = args.reduce((prev, curr) => prev + curr + ' ', '');
}

//exercise.js
import {create} from './renderer';

const renderer = create();

renderer.write('JavaScript for Life');

//renderer.js
import * as consoleRenderer from './console';
import * as domRenderer from './dom';

export function create(renderModule) {
  if (!renderModule) {
    return domRenderer;
  }
  if (typeof renderModule === 'string') {
    if (renderModule === 'console') {
      return consoleRenderer;
    }
    return domRenderer;
  }
  throw new TypeError('renderer.create: unexpected input');
}
