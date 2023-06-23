function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Bg = getRandomHexColor()
const btnColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');

const changeBgClor = (evt) => {
    bodyColor.style.backgroundColor = Bg;
    spanColor.textContent = bodyColor.style.backgroundColor
}
btnColor.addEventListener('click', changeBgClor);