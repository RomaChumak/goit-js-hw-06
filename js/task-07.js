const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', () => {
    spanEl.style.fontSize = `${inputEl.value}px`;
    console.log(inputEl.value);
    console.log(spanEl.style.fontSize)
});
