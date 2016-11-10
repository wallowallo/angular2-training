const element = document.getElementById('example');

const container = {
  js: 'JavaScript',
  life: 'Life'
};
// let js = container.js;
// let life = container.life;
// the two let above in one object of let.
let { js, life } = container;
element.innerHTML = `${js} for ${life}`;
