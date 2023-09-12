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
  const cardValue = Math.floor(Math.random() * 6) + 1
  card.textContent = cardValue
  container.append(card)
}

const container = document.getElementById('container')
for (let i = 0; i < 10; i++) {
  let card = document.createElement('div')
  card.classList.add('card')
  const cardValue = Math.floor(Math.random() * 6) + 1
  card.textContent = cardValue
  container.append(card)
}

const uzenet = document.getElementById('uzenet')
uzenet.style.cursor = 'pointer'
