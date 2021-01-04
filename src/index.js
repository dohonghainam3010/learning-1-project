import './test.js';
import './style.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello World!';
  console.log(123)
  return element;
}
document.body.appendChild(component());
