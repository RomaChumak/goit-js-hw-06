const counterValue = document.querySelector('#value');
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
decrement.addEventListener("click", handleClick);
function handleClick(){
    return counterValue.textContent -= 1;
    //  console.log(counterValue.textContent)
}
increment.addEventListener("click", handleClickUp)
function handleClickUp(){
    return counterValue.textContent += 1;
    // console.log(counterValue.textContent)
}

