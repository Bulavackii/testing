/* eslint-disable linebreak-style */ // Отключение правила проверки стиля для переноса строк
/* eslint-disable consistent-return */ // Отключение правила проверки на согласование возврата

import luhnAlgoritm from "./validate"; // Импорт функции luhnAlgorithm из файла './validate'
import cardNumber from "./card"; // Импорт функции cardNumber из файла './card'

const card = document.querySelector(".input"); // Выбор элемента с классом 'input' (вероятно, поле ввода номера карты)
const submit = document.querySelector(".submit"); // Выбор элемента с классом 'submit' (вероятно, кнопка отправки формы)
const cards = [...document.querySelectorAll(".card")]; // Выбор всех элементов с классом 'card' и преобразование их в массив

function checkCard() {
  if (card.value === "") {
    return false; // Если значение поля ввода пустое, завершаем функцию и возвращаем false
  }

  // Удаление класса 'nocard' у всех элементов с классом 'card'
  cards.forEach((el) => {
    if (el.classList.contains("nocard")) {
      el.classList.remove("nocard");
    }
  });

  // Проверка номера карты с использованием алгоритма Луна
  if (luhnAlgoritm(card.value)) {
    // Если номер карты прошел проверку, добавляем класс 'valid' и определяем тип карты, добавляя соответствующий класс другим элементам
    card.classList.remove("novalid");
    card.classList.add("valid");
    const type = cardNumber(card.value);
    cards.forEach((el) => {
      if (!el.classList.contains(type)) {
        el.classList.add("nocard");
      }
    });
  } else {
    card.classList.remove("valid");
    card.classList.add("novalid");
  }
}

submit.addEventListener("click", (event) => {
  event.preventDefault();
  checkCard();
});

card.addEventListener("input", () => {
  if (card.value === "") {
    cards.forEach((el) => {
      if (el.classList.contains("nocard")) {
        el.classList.remove("nocard");
      }
    });
  }
});
