const color = document.querySelector('.color');
const button = document.querySelector('.change-color');

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', () => {
  let hexColor = generateHex();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function generateHex() {
  let hexColor = '';
  for (let i = 0; i < 6; i += 1) {
   hexColor = getRandomHexColor();
  }

  return hexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}