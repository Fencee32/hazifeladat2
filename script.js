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

  const randomValue = Math.floor(Math.random() * 6) + 1 // Véletlenszerű érték 1 és 6 között
  const dotCharacters = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

  let dotText = ''
  for (let i = 0; i < randomValue; i++) {
    dotText += dotCharacters[i]
  }

  dice.textContent = dotText
  container.appendChild(dice)
}
