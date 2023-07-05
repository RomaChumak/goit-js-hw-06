const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', handlerSub);
function handlerSub(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (!email.value || !password.value) {
        const message = 'insert all feld';
        alert(message)
    } else {
        const data = {
            email: email.value,
            password: password.value,
        };
        console.log(data)
    }
    formEl.reset()
}