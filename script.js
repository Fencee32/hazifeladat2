document.getElementById('uzenet').onclick = function () {
  alert('Szervbusz')
  }
  console.log('cső')
  console.error('nem')
  
  
  document.querySelector('h2').onclick = function () {
  alert('Boldog új évet!')
  }
  
document.getElementById('dobas').onclick = function () {
const container = document.getElementById("container");
const cardValue = Math.floor(Math.random() * 6) + 1;
const card = document.createElement("div");
card.textContent = cardValue;
container.appendChild(card);

}


const uzenet = document.getElementById('uzenet')
uzenet.style.cursor = 'pointer'
