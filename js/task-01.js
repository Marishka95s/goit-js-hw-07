// Задание 1
// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const ulCategories = document.querySelectorAll('.item');
console.log(`В списке ${ulCategories.length} категории.`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

for (let i = 0; i < ulCategories.length; i += 1) {
    console.log(`Категория: ${ulCategories[i].childNodes[1].textContent}`);
console.log(`Количество элементов: ${ulCategories[i].childNodes[3].children.length}`);
}