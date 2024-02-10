/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
import luhnAlgoritm from './validate';
import cardNumber from './card';

const card = document.querySelector('.input');
const submit = document.querySelector('.submit');
const cards = [...document.querySelectorAll('.card')];

function checkCard() {
  if (card.value === '') {
    return false;
  }
  cards.forEach((el) => {
    if (el.className.includes('nocard')) {
      el.classList.remove('nocard');
    }
  });
  if (luhnAlgoritm(card.value)) {
    card.classList.remove('novalid');
    card.classList.add('valid');
    const type = cardNumber(card.value);
    cards.forEach((el) => {
      if (!el.className.includes(type)) {
        el.classList.add('nocard');
      }
    });
  } else {
    card.classList.remove('valid');
    card.classList.add('novalid');
  }
}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  checkCard();
});

card.addEventListener('input', () => {
  if (card.value === '') {
    cards.forEach((el) => {
      if (el.className.includes('nocard')) {
        el.classList.remove('nocard');
      }
    });
  }
});
