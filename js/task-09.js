function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector('.color')
const btn = document.querySelector('.change-color')
const body = document.querySelector('body')

btn.addEventListener('click', (event) => {
  console.log('button was clicked')
  body.style.background = getRandomHexColor(event)
  span.textContent = getRandomHexColor(event)
})


