// Variables y constantes
const backBtn = document.getElementById('back-button');
const comidaBtn = document.getElementById('comida-btn');
const dormirBtn = document.getElementById('dormir-btn');
const deporteBtn = document.getElementById('deporte-btn');
const banarseBtn = document.getElementById('banarse-btn');

const comidaBarra = document.querySelector('.comida-barra .progress');
const dormirBarra = document.querySelector('.dormir-barra .progress');
const deporteBarra = document.querySelector('.deporte-barra .progress');
const banarseBarra = document.querySelector('.banarse-barra .progress');

const letreroContainer = document.getElementById('letrero-container');
const messages = [
  'Alimenta a Maui',
  'Maui necesita dormir',
  'Maui quiere jugar',
  'Maui tiene que cuidarse'
];

// Funciones
function showRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  const letreroElement = document.createElement('p');
  letreroElement.textContent = randomMessage;
  letreroElement.className = 'burbuja';
  letreroContainer.appendChild(letreroElement);
  setTimeout(() => {
    letreroElement.remove();
  }, 2000); // remove the message after 2 seconds
}

function handleBackButton() {
  window.history.go(-1);
}

function handleButtonPress(button, barra) {
  const valor = parseInt(barra.style.width) + 10;
  if (valor <= 100) {
    barra.style.width = `${valor}%`;
  } else {
    barra.style.width = '100%';
    button.disabled = true; // Deshabilita el botón cuando la barra esté completa
  }
  
  if (barra.style.width === '100%') {
    // Mostrar letrero "Maui feliz"
    const letrero = document.getElementById('letrero');
    letrero.textContent = 'Maui feliz';
    letrero.style.display = 'block';
    setTimeout(() => {
      letrero.style.display = 'none';
    }, 5000); // Oculta el letrero después de 2 segundos
  }
}

// Eventos
backBtn.addEventListener('click', handleBackButton);

comidaBtn.addEventListener('click', () => {
  handleButtonPress(comidaBtn, comidaBarra);
});

dormirBtn.addEventListener('click', () => {
  handleButtonPress(dormirBtn, dormirBarra);
});

deporteBtn.addEventListener('click', () => {
  handleButtonPress(deporteBtn, deporteBarra);
});

banarseBtn.addEventListener('click', () => {
  handleButtonPress(banarseBtn, banarseBarra);
});

// Intervalo para mostrar mensajes aleatorios
setInterval(showRandomMessage, Math.random() * 5000 + 5000);