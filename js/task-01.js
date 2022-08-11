const listCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, listCategories.length);

const title = document.querySelectorAll(`h2`);
console.log(`Category:`, title[0].textContent);
console.log(`Elements:`, listCategories[0].lastElementChild.children.length);

console.log(`Category:`, title[1].textContent);
console.log(`Elements:`, listCategories[1].lastElementChild.children.length);


console.log(`Category:`, title[2].textContent);
console.log(`Elements:`, listCategories[2].lastElementChild.children.length);










