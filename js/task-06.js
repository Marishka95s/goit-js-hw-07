// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    inputEl.classList.add('valid');
    if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
        inputEl.classList.replace('invalid', 'valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};
