const color = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
let hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}