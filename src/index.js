import './test.js';
import './style.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello World!';
  console.log('index')
  return element;
}
document.body.appendChild(component());
