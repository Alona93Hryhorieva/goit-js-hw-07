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
іншому випадку встановлюємо значення з інпуту // } // }); \*--------/////------
// відправлення форми form.login - form повинна відбуватися за подією submit. //
Під час відправлення форми сторінка не повинна перезавантажуватися. // Якщо при
сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All
form fields must be filled in'. Не додавай на інпути атрибут required, валідація
має відбуватися саме через JS. // Якщо користувач заповнив усі поля і відправив
форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я
інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по
краях. Для доступу до елементів форми використовуй властивість elements. // При
сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення
полів форми методом reset.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>

<script>
  document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Це запобігає перезавантаженню сторінки при відправленні форми

    // Отримуємо значення полів форми
    const emailInput = this.elements['email'].value.trim();
    const passwordInput = this.elements['password'].value.trim();

    // Перевіряємо, чи заповнені всі поля
    if (emailInput === '' || passwordInput === '') {
      alert('All form fields must be filled in');
      return; // Припиняємо подальше виконання коду
    }

    // Збираємо дані в об'єкт
    const formData = {
      email: emailInput,
      password: passwordInput
    };

    // Виводимо об'єкт з введеними даними в консоль
    console.log(formData);

    // Очищаємо значення полів форми
    this.reset();
  });
</script>

_//////////////////////_ Напиши скрипт, який змінює колір фону елемента <body>
через інлайн-стиль по кліку на button.change-color і задає це значення кольору
текстовим вмістом для span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

/\*\*\*\*/---+++///

Для генерування випадкового кольору використовуй функцію getRandomHexColor().
function getRandomHexColor() { return
`#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`; }
Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той
час як колір фону на <body> буде у форматі rgb. Це нормально й не потребує
якихось правок.

function getRandomHexColor() { return
`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`; }

const button = document.querySelector('.change-color'); const colorSpan =
document.querySelector('.color');

button.addEventListener('click', function() { const newColor =
getRandomHexColor(); document.body.style.backgroundColor = newColor;
colorSpan.textContent = newColor; });

-----\*\*\*\*----- // Напиши скрипт створення й очищення колекції елементів з
наступним функціоналом. // Є input, у який користувач вводить бажану кількість
елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM)
колекція з відповідною кількістю елементів і очищатися значення в інпуті. При
повторному натисканні на кнопку Create поверх старої колекції має рендеритись
нова. Після натискання на кнопку Destroy колекція елементів має очищатися. //
Після натискання користувачем на кнопку Create треба провалідувати значення в
input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє
умову, мають додаватися нові <div> елементи в DOM. // Для рендеру елементів на
сторінці створи функцію createBoxes(amount), яка приймає один параметр — число,
що зберігає кількість елементів для рендеру. // Функція має створювати стільки
<div> елементів, скільки вказано в параметрі amount і додавати їх у DOM
дочірніми елементами для div#boxes. // Розміри першого <div> елемента мають бути
30px на 30px. // Кожен наступний елемент повинен бути ширшим і вищим від
попереднього на 10px. // Усі елементи повинні мати випадковий колір
фону.Використовуй готову функцію getRandomHexColor() для отримання випадкового
кольору.
