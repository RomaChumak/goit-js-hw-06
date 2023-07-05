const counterVal = document.querySelector('#value');
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const handleClick = () => {
    counterValue -= 1;
    counterVal.innerHTML = counterValue;
   
}
decrement.addEventListener("click", handleClick);
const handleClickUp = () => {
    counterValue += 1;
    counterVal.innerHTML = counterValue;
}
increment.addEventListener("click", handleClickUp)

