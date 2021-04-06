// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('input');
inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);

let inputLength = 0;
function onInputFocus() {
    console.log('Инпут получил фокус');
    inputEl.addEventListener('input', onInputChange);    
};
function onInputBlur() {
    console.log('Инпут потерял фокус');
    inputEl.classList.add('invalid');
    if (Number(inputEl.dataset.length) === inputLength) {
        inputEl.classList.replace('invalid', 'valid');
    }
};
function onInputChange() {
    inputLength = inputEl.value.length;
    console.log('Изменение значения импута!',`Введено ${inputLength} символов`);
};