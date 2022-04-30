import { Layer } from './Layer/index.js';
import './style.css';

console.log('funguju!');

const navBurger = document.querySelector('#nav-btn');
const navElms = document.querySelector('nav');

navBurger.addEventListener('click', () =>
  navElms.classList.toggle('nav-closed'),
);

const navHide = document.querySelectorAll('nav a');
navHide.forEach((item) =>
  item.addEventListener('click', () => {
    navElms.classList.add('nav-closed');
  }),
);

const orderElm = document.querySelector('.order-btn');
const cupElm = document.querySelector('.drink__cup');

let ordered = false;
orderElm.addEventListener('click', () => {
  if (!ordered) {
    orderElm.textContent = 'Zrušit';
    cupElm.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    orderElm.textContent = 'Objednat';
    cupElm.classList.remove('drink__cup--selected');
    ordered = false;
  }
});
