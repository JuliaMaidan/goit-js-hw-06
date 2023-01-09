const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newItem = document.createElement('li')
newItem.textContent = ingredients[0]

const newItem1 = document.createElement('li')
newItem1.textContent = ingredients[1]

const newItem2 = document.createElement('li')
newItem2.textContent = ingredients[2]

const newItem3 = document.createElement('li')
newItem3.textContent = ingredients[3]

const newItem4 = document.createElement('li')
newItem4.textContent = ingredients[4]

const newItem5 = document.createElement('li')
newItem5.textContent = ingredients[5]

const list = document.querySelector('ul#ingredients')
list.append(newItem, newItem1, newItem2, newItem3, newItem4, newItem5)