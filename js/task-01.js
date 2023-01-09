const allTitles = document.querySelectorAll('h2');
console.log(`Number of categories: ${allTitles.length}`)

const list = document.querySelector('ul')
const allElements = list.children


const titleValue = document.querySelectorAll('.item h2')
console.log(`Category: ${titleValue[0].textContent}`)

const animals = allElements[0].querySelectorAll('li')
console.log(`Elements: ${animals.length}`)


const titleValue1 = document.querySelectorAll('.item h2')
console.log(`Category: ${titleValue1[1].textContent}`)

const products = allElements[1].querySelectorAll('li')
console.log(`Elements: ${products.length}`)


const titleValue2 = document.querySelectorAll('.item h2')
console.log(`Category: ${titleValue2[2].textContent}`)

const technologies = allElements[2].querySelectorAll('li')
console.log(`Elements: ${technologies.length}`)