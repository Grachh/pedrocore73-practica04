// Variables
/* Comentario
en bloque */
var saludo = '¡Hola Mundo!';

saludo = '¡Hola Madrid!';

var resultado;

let ciudad;

const URL = "http:/loquesea...";

var diaMes = 12; 

console.log(saludo);
console.log(resultado);
console.log(diaMes);

// Funciones

// Definición
function suma(a, b){
    console.log(a + b);
}

//Ejecución
suma(2,3);
suma(10,20.2);

// Interacción con el DOM

var mensaje = document.getElementById('mensaje');

console.log(mensaje);

// mensaje.innerHTML = 'Bienvenido de nuevo Juan';

function setMensaje(nombre) {
    mensaje.innerHTML = 'Bienvenido de nuevo ' + nombre;
}