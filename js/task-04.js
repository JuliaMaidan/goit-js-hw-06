// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = document.querySelector('#value');

const decrement = document.querySelector('button[data-action="decrement"]')

const increment = document.querySelector('button[data-action="increment"]')


const decrementClick = () => {
    console.log(counterValue.textContent -= 1)
}

const incrementClick = () => {
    console.log(counterValue.textContent ++)
}

decrement.addEventListener('click', decrementClick)

increment.addEventListener('click', incrementClick)
