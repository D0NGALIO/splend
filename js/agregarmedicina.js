$(document).ready(function() {
  $('.btn-dia').click(function() {
    $('.btn-dia').removeClass('selected'); /* Eliminamos la clase 'selected' de todos los botones */
    $(this).addClass('selected'); /* Agregamos la clase 'selected' al botón que ha sido presionado */
    
    console.log($(this).hasClass('selected')); /* Agregamos un código de depuración para verificar que la clase 'selected' se esté agregando correctamente */
  });
});