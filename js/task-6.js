// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.
// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.
// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.
// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

const btnCreate = document.querySelector(".controls button[data-create]");
const btnDestroy = document.querySelector(".controls button[data-destroy]");

const registerImput = document.querySelector("#controls");
registerImput.addEventListener("submit", handleSubmit);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  const box = document.querySelector(".#boxes");
  box.remove;
}

for (let index =0; index < 100; index +=1) {
  const element = array[index];
  
}

// const button = document.querySelector(".change-color");
// const span = document.querySelector(".color");

// button.addEventListener("click", function() {
//   const newColor = getRandomHexColor();

//   document.body.style.backgroundColor = newColor;

//   span.textContent = newColor;
// })

// function handleSubmit(event){
//     event.preventDefault();
//     const form = event.target;
//     const email = form.elements.email.value.trim();
//     const password = form.elements.password.value.trim();

//     if (email === "" || password === "") {
//         alert('All form fields must be filled in');
//         return;
//     }
    
//     const formData = {
//         Login: email,
//         Password: password
//     };

//     console.log(formData);

//     form.reset();
// }