// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');

inputEl.addEventListener('input', onInputChange);

function onInputChange() {
    spanEl.style.fontSize = inputEl.value + 'px';
    console.log(`Розмір шрифту "Абракадабра!" зараз ${spanEl.style.fontSize}`);
};