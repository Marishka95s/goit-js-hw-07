// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
const counterValue = {
    value: 0,

    // Создай функции increment и decrement для увеличения и уменьшения значения счетчика
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    }
};

// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const allButtons = document.querySelectorAll('button');
const value = document.querySelector('span');
const decrementBtn = allButtons[0];
const incrementBtn = allButtons[1];

decrementBtn.addEventListener('click', () => {
    console.log('Кликнули на декремент');

    counterValue.decrement();
    console.log(counterValue);
    value.textContent = counterValue.value;
});
 incrementBtn.addEventListener('click', () => {
    console.log('Кликнули на инкремент');
    
    counterValue.increment();
    console.log(counterValue);
    value.textContent = counterValue.value;
 });

