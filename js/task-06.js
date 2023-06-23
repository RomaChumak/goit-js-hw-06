const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', (evt) => {
    const inputLength = evt.currentTarget.value;
    if (Number(inputLength.length) == Number(dataLength)) {
        if(!inputEl.classList.contains('invalid')){
            inputEl.classList.add("valid");
        } else {
            inputEl.classList.replace('invalid', 'valid');
        }
    } else {
        if(!inputEl.classList.contains('valid')){
            inputEl.classList.add("invalid")
        } else {
           inputEl.classList.replace('valid', 'invalid');
        }
    }
    console.log(Number(inputLength.length))
})
console.log(Number(dataLength))