// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
let counterValue = 0;
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
const increment () {
    
}

// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const refs = {
    decrement: document.querySelector('button').dataset.action.decrement,
    increment: document.querySelector('button').dataset.action.increment
};
refs.decrement.addEvent