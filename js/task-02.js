
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector('#ingredients');
const el = ingredients.map((ingredient) => {
  const liElement = document.createElement('li');
  liElement.classList.add('item');
  liElement.textContent = ingredient;
  return liElement;
});
 listEl.append(...el)
