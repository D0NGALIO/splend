//En esta parte estamos creando variables con var, llamando clases del html
var botones = document.querySelectorAll('.sw1');
var fecha = document.querySelector('.fechat');
var fecha2 = document.querySelector('.fechat2');
var fecha3 = document.querySelector('.fechat3');

//En la variable meses, no se esta llamando un elemento de html, sino que se está asignando ciertos valores a la variable meses
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var tabla2 = document.querySelector('.t2');
var tabla3 = document.querySelector('.t3');

//Este fragmento de código itera sobre cada elemento en la colección botones y agrega un escuchador de eventos de clic a cada uno de ellos. 
botones.forEach(function(boton, index) {
  boton.addEventListener('click', function() {
    //En esta parte, llamamos las variables fecha,fecha2,fecha3 previamente creados y se reemplaza la palabra Abril por el mes seleccionado.
    fecha.innerHTML = fecha.innerHTML.replace(/\b\w+\b$/, meses[index]);
    fecha2.innerHTML = fecha2.innerHTML.replace(/\b\w+\b$/, meses[index]);
    fecha3.innerHTML = fecha3.innerHTML.replace(/\b\w+\b$/, meses[index]);

    /*Aquí se activa un estilo en el botón para indicar que está activo. En el CSS se le agrega un color para distinguirlo. 
    Al hacer esto, se elimina ese estilo del botón previamente seleccionado y se le asigna a la nueva selección.*/
    botones.forEach(function(b) {
      b.classList.remove('active');
    });

    boton.classList.add('active');
  });
});

/*Todos los que dicen .addEventListener('click', function() indican que se le está añadiendo un evento de clic a la clase seleccionada, de está manera si se le da clic 
activara una clase que posee estilos añadidos en el css*/

fecha2.addEventListener('click', function() {
  tabla2.classList.toggle('visible');
});

fecha3.addEventListener('click', function() {
  tabla3.classList.toggle('visible');
});

var btncontent2 = document.querySelector('.btn-rdiario');
var content1 = document.querySelector('.content');
var content2 = document.querySelector('.content2');
var m2 = document.querySelector('.m2-2');

btncontent2.addEventListener('click', function() {
  content1.style.display = 'none';
  content2.style.display = 'block';
});

m2.addEventListener('click', function() {
  content1.style.display = 'block';
  content2.style.display = 'none';
});

var botones2 = document.querySelectorAll('.sw2');

botones2.forEach(function(boton, index) {
  boton.addEventListener('click', function() {
    botones2.forEach(function(b) {
      b.classList.remove('active');
    });

    boton.classList.add('active');
  });
});

var desayuno = document.querySelector('.desayuno');
var tablad1 = document.querySelector('.tarjeta-dias1');
var mediamañana = document.querySelector('.media-mañana');
var tablad2 = document.querySelector('.tarjeta-dias2');
var almuerzo = document.querySelector('.almuerzo');
var tablad3 = document.querySelector('.tarjeta-dias3');
var merienda = document.querySelector('.merienda');
var tablad4 = document.querySelector('.tarjeta-dias4');

desayuno.addEventListener('click', function() {
  tablad1.classList.toggle('visible');
});

mediamañana.addEventListener('click', function() {
  tablad2.classList.toggle('visible');
});

almuerzo.addEventListener('click', function() {
  tablad3.classList.toggle('visible');
});

merienda.addEventListener('click', function() {
  tablad4.classList.toggle('visible');
});

var btncalendario = document.querySelector('.btn-calendario');
var calendario = document.querySelector('.calendario');
var cmeses = document.querySelector('#meses');
var subcalendario = document.querySelector('.sub-calendario');


btncalendario.addEventListener('click', function() {
  calendario.style.display = 'block';
  btncalendario.style.display = 'none';
  cmeses.style.display = 'none';
});

subcalendario.addEventListener('click', function() {
  calendario.style.display = 'none';
  btncalendario.style.display = 'flex';
  cmeses.style.display = 'initial';
  event.stopPropagation();
});


// Obtén el valor del mes seleccionado (por ejemplo, "Mayo")
var selectedMonth = "Abril";

// Asigna el valor del mes seleccionado a los elementos correspondientes
document.getElementById("month1").textContent = selectedMonth;
document.getElementById("month2").textContent = selectedMonth;
document.getElementById("month3").textContent = selectedMonth;
document.getElementById("month4").textContent = selectedMonth;
document.getElementById("month5").textContent = selectedMonth;
document.getElementById("month6").textContent = selectedMonth;
document.getElementById("month7").textContent = selectedMonth;
document.getElementById("month8").textContent = selectedMonth;
document.getElementById("month9").textContent = selectedMonth;
document.getElementById("month10").textContent = selectedMonth;
document.getElementById("month11").textContent = selectedMonth;




// Obtener el elemento del párrafo
var parrafo = document.querySelector('.btn-calendario p');

// Obtener los elementos de los meses de la tabla
var mesesTabla = document.querySelectorAll('.t-calendario td');

/*Se itera sobre cada elemento en la colección mesesTabla y se agrega un escuchador de eventos de clic a cada uno de ellos. 
Dentro de esta función, se realiza una serie de acciones cuando se hace clic en un mes.*/
mesesTabla.forEach(function(mes) {
  mes.addEventListener('click', function() {
    calendario.style.display = 'none';
    btncalendario.style.display = 'flex';
    cmeses.style.display = 'initial';

    // Obtener el texto del mes seleccionado
    var nuevoMes = mes.textContent.trim();
    parrafo.textContent = nuevoMes;

    // Iterar sobre los elementos y asignar el nuevo mes seleccionado
    for (var i = 1; i <= 11; i++) {
      var spanId = 'month' + i;
      var spanElemento = document.getElementById(spanId);
      if (spanElemento) {
        spanElemento.textContent = nuevoMes;
      }
    }
  });
});
