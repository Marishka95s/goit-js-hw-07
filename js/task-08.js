// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputEl = document.querySelector('input');
const mainDiv = document.querySelector('#boxes')
const buttons = document.querySelectorAll('button');
const renderBtn = buttons[0];
const destroyBtn = buttons[1];

let necessaryElQuantity = 0;

inputEl.addEventListener('input', onInputChange);
renderBtn.addEventListener('click', onRenderBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onInputChange() {
    necessaryElQuantity = inputEl.value;
    console.log('Изменение значения импута!',`Собираются срендерить ${necessaryElQuantity} элементов!`);
};

function onRenderBtnClick() {
    console.log('Нажатие на клавишу рендеринга');
    createBoxes(necessaryElQuantity);
    mainDiv.style.display = 'flex';
    mainDiv.style.flexWrap = 'wrap';
    console.log(`Создано ${necessaryElQuantity} элементов`);
};
function onDestroyBtnClick() {
    console.log('Нажатие на клавишу дестроинга');
    destroyBoxes();
    console.log('Все обьекты удалены');
};
function createBoxes(amount) {
    let allRendered = mainDiv.querySelectorAll('div');
    let renderedQuantuty = allRendered.length;
    const divEls = [];
    
    for (let i = 0; i < amount; i += 1) {
        const divEl = document.createElement('div');
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        divEl.style.backgroundColor = "#" + randomColor; 
        divEl.style.display = 'block';
        divEl.style.margin = '2px';

        divEl.style.width = 20 + 10 * (i + renderedQuantuty) + 'px';
        divEl.style.height = 20 + 10 * (i + renderedQuantuty) + 'px';
        console.log('Создан елемент');
        divEls.push(divEl);
    }
    return mainDiv.append(...divEls);
};

function destroyBoxes() {
    const elementsForDestroying = mainDiv.querySelectorAll('div');
    elementsForDestroying.forEach(elem => {mainDiv.removeChild(elem);})
};

