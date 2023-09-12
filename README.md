document.getElementById('uzenet').onclick = function () {
alert('Szervbusz')
}
console.log('cső')
console.error('nem')

document.querySelector('h2').onclick = function () {
alert('Boldog új évet!')
}

document.getElementById('dobas').onclick = function () {
const container = document.getElementById('container')
let card = document.createElement('div')
card.classList.add('card')
const cardValue = Math.floor(Math.random() \* 6) + 1
card.textContent = cardValue
container.append(card)
}

const container = document.getElementById('container')
for (let i = 0; i < 10; i++) {
let card = document.createElement('div')
card.classList.add('card')
const cardValue = Math.floor(Math.random() \* 6) + 1
card.textContent = cardValue
container.append(card)
}

const uzenet = document.getElementById('uzenet')
uzenet.style.cursor = 'pointer'

h1,
h2,
h3,
h4,
h5,
h6 {
text-decoration: underline;
}

.card {
border: 2px solid black;
box-shadow: 2px 2px blue;
height: 100px;
width: 80px;
font-size: 30px;
font-family: Arial, Helvetica, sans-serif;
display: inline-block;
text-align: center;
line-height: 90px;
border-radius: 5px;
margin: 10px;
}

document.getElementById('uzenet').onclick = function () {
alert('Szervbusz')
}

console.log('cső')
console.error('nem')

document.querySelector('h2').onclick = function () {
alert('Boldog új évet!')
}

const container = document.getElementById('container')

// Kezdetben 10 kocka generálása
for (let i = 0; i < 10; i++) {
generateDice()
}

document.getElementById('dobas').onclick = function () {
generateDice()
}

function generateDice() {
let dice = document.createElement('div')
dice.classList.add('dice')

const randomValue = Math.floor(Math.random() \* 6) + 1 // Véletlenszerű érték 1 és 6 között
for (let i = 0; i < randomValue; i++) {
let dot = document.createElement('div')
dot.classList.add('dice-dot')
dice.appendChild(dot)
}

container.appendChild(dice)
}
