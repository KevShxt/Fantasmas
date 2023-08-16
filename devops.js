// Declaración de variables y constantes
var variable1 = "Hola";
let variable2 = "Mundo";
const constante = 42;

// Definición de funciones
function miFuncion(parametro) {
    // Código de la función
    console.log(parametro);
}

// Llamada a funciones
miFuncion(variable1);

// Estructuras de control
if (constante === 42) {
    console.log("La constante es igual a 42");
} else {
    console.log("La constante no es igual a 42");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Eventos y manejo del DOM (ejemplo para navegador web)
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("miBoton");
    
    boton.addEventListener("click", function() {
        console.log("¡Botón clickeado!");
    });
});

// Programación asíncrona (ejemplo con promesas)
const miPromesa = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("La promesa se cumplió");
    }, 2000);
});

miPromesa.then(function(resultado) {
    console.log(resultado);
}).catch(function(error) {
    console.error(error);
});
