//Con var estamos llamando los id del html, en este caso like y dislike que son los svg
var likes = document.querySelectorAll('#like');
var dislikes = document.querySelectorAll('#dislike');


//Este fragmento de código itera sobre cada elemento en la colección likes y agrega un escuchador de eventos de clic a cada uno de ellos.
likes.forEach(function(like) {
  like.addEventListener('click', function() {
    dislikes.forEach(function(dislike) {
      if (dislike.classList.contains('reaccion')) {
        dislike.classList.remove('reaccion');
      }
    });
    this.classList.toggle('reaccion');
  });
});

dislikes.forEach(function(dislike) {
  dislike.addEventListener('click', function() {
    likes.forEach(function(like) {
      if (like.classList.contains('reaccion')) {
        like.classList.remove('reaccion');
      }
    });
    this.classList.toggle('reaccion');
  });
});


var btnperfil = document.querySelector('.btn-perfil');
var contenido = document.querySelector('.content');
var perfil = document.querySelector('.perfil');
var btnpublicar = document.querySelector('.btn-publicar');
var publicar = document.querySelector('.publicar');

btnperfil.addEventListener('click', function() {
    contenido.style.display = 'none';
    perfil.style.display = 'block' ;
  });

  btnpublicar.addEventListener('click', function() {
    contenido.style.display = 'none';
    publicar.style.display = 'block' ;
  });