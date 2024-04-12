Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів
li.item. Для кожного елемента li.item у списку ul#categories знайде й виведе в
консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії
(усіх <li>, вкладених у нього). // Отримання всіх елементів li.item const
categories = document.querySelectorAll('ul#categories li.item');

// Виведення кількості категорій
console.log(`Number of categories: ${categories.length}`);

// Цикл для отримання назви категорії та кількості елементів у ній
categories.forEach(category => { const categoryName =
category.querySelector('h2').textContent; const categoryItemCount =
category.querySelectorAll('li').length;
console.log(`Category: ${categoryName}`);
console.log(`Elements: ${categoryItemCount}`); });

_------_ Напиши скрипт для створення галереї зображень на основі масиву даних.
HTML містить список ul.gallery.

<ul class="gallery"></ul>
Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
Ти можеш створити й додати HTML-елементи, використовуючи
document.createElement() і elem.append() або шаблонні рядки і
elem.insertAdjacentHTML().
Усі елементи галереї повинні додаватися в DOM за одну операцію додавання. Додай
мінімальне оформлення галереї флексбоксами через CSS класи. // Знаходимо елемент
ul.gallery const gallery = document.querySelector('ul.gallery');

// Створюємо фрагмент для зберігання усіх елементів галереї перед вставкою в DOM
const fragment = document.createDocumentFragment();

// Проходимося по кожному об'єкту в масиві images images.forEach(image => { //
Створюємо новий елемент li const listItem = document.createElement('li');

    // Створюємо новий елемент img
    const img = document.createElement('img');

    // Встановлюємо атрибути src та alt для зображення
    img.src = image.url;
    img.alt = image.alt;

    // Додаємо зображення в елемент li
    listItem.appendChild(img);

    // Додаємо елемент li до фрагменту
    fragment.appendChild(listItem);

});

// Додаємо усі елементи галереї до DOM за одну операцію
gallery.appendChild(fragment);

_-----_ Напиши скрипт, який під час набору тексту в інпуті input#name-input
(подія input) підставляє його поточне значення в span#name-output як ім’я для
привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо
інпут порожній або містить лише пробіли, то замість імені у спан має
підставлятися рядок "Anonymous". // Отримуємо посилання на елементи DOM // const
nameInput = document.getElementById('name-input'); // const nameOutput =
document.getElementById('name-output');

// Додаємо обробник події input до інпуту //
textInputt.addEventListener('input', function() { // Отримуємо поточне значення
інпуту та очищаємо від пробілів по краях // const inputValue =
nameInput.value.trim();

// Перевіряємо, чи інпут порожній або містить лише пробіли // if (inputValue ===
'') { // nameOutput.textContent = 'Anonymous'; // Якщо так, встановлюємо
'Anonymous' у спан // } else { // nameOutput.textContent = inputValue; // В
іншому випадку встановлюємо значення з інпуту // } // });
