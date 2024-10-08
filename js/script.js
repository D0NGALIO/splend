// Popup 1
var pop1 = document.querySelector('.pop1');
var ventana1 = document.querySelector('.d');
var cerrar1 = document.querySelector('.cerrar');
var contentv1 = document.querySelector('.sub-d');

pop1.addEventListener('click', function() {
  ventana1.classList.add('v-active');
  ventana1.style.display = 'block';
});

cerrar1.addEventListener('click', function() {
  ventana1.style.display = 'none';
  ventana1.classList.remove('v-active');
});

ventana1.addEventListener('click', function(e) {
  if (e.target === contentv1) {
    ventana1.style.display = 'none';
    ventana1.classList.remove('v-active');
  }
});

// Popup 2
var pop2 = document.querySelector('.pop2');
var ventana2 = document.querySelector('.mm2');
var cerrar2 = document.querySelector('.cerrar2');
var contentv2 = document.querySelector('.sub-d2');

pop2.addEventListener('click', function() {
  ventana2.classList.add('v-active');
  ventana2.style.display = 'block';
});

cerrar2.addEventListener('click', function() {
  ventana2.style.display = 'none';
  ventana2.classList.remove('v-active');
});

ventana2.addEventListener('click', function(e) {
  if (e.target === contentv2) {
    ventana2.style.display = 'none';
    ventana2.classList.remove('v-active');
  }
});

// Popup 3
var pop3 = document.querySelector('.pop3');
var ventana3 = document.querySelector('.alm');
var cerrar3 = document.querySelector('.cerrar3');
var contentv3 = document.querySelector('.sub-d3');

pop3.addEventListener('click', function() {
  ventana3.classList.add('v-active');
  ventana3.style.display = 'block';
});

cerrar3.addEventListener('click', function() {
  ventana3.style.display = 'none';
  ventana3.classList.remove('v-active');
});

ventana3.addEventListener('click', function(e) {
  if (e.target === contentv3) {
    ventana3.style.display = 'none';
    ventana3.classList.remove('v-active');
  }
});
// Popup 4
var pop4 = document.querySelector('.pop4');
var ventana4 = document.querySelector('.mt');
var cerrar4 = document.querySelector('.cerrar4');
var contentv4 = document.querySelector('.sub-d4');

pop4.addEventListener('click', function() {
  ventana4.classList.add('v-active');
  ventana4.style.display = 'block';
});

cerrar4.addEventListener('click', function() {
  ventana4.style.display = 'none';
  ventana4.classList.remove('v-active');
});

ventana4.addEventListener('click', function(e) {
  if (e.target === contentv4) {
    ventana4.style.display = 'none';
    ventana4.classList.remove('v-active');
  }
});
// Popup 5
var pop5 = document.querySelector('.pop5');
var ventana5 = document.querySelector('.cena');
var cerrar5 = document.querySelector('.cerrar5');
var contentv5 = document.querySelector('.sub-d5');

pop5.addEventListener('click', function() {
  ventana5.classList.add('v-active');
  ventana5.style.display = 'block';
});

cerrar5.addEventListener('click', function() {
  ventana5.style.display = 'none';
  ventana5.classList.remove('v-active');
});

ventana5.addEventListener('click', function(e) {
  if (e.target === contentv5) {
    ventana5.style.display = 'none';
    ventana5.classList.remove('v-active');
  }
});