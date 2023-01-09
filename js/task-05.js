const name = document.querySelector('#name-output');

const nameInput = document.querySelector('#name-input');

nameInput.addEventListener('input', (event) => {
    if (nameInput.value.length >= 1) {
        name.textContent = event.currentTarget.value;
    } else {
        name.textContent = 'Anonymous'
    }
})

