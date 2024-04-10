// Отримання всіх елементів li.item
const categories = document.querySelectorAll('ul#categories li.item');

// Виведення кількості категорій
console.log(`Number of categories: ${categories.length}`);

// Цикл для отримання назви категорії та кількості елементів у ній
categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemCount = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemCount}`);
});