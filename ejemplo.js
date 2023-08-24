// Definir una función
function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

// Llamar a la función
saludar("Juan");

// Manipulación básica del DOM (Document Object Model)
var elemento = document.getElementById("miElemento");
elemento.innerHTML = "Este es un texto modificado desde JavaScript";

// Condicionales
var edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Bucles
for (var i = 0; i < 5; i++) {
  console.log("Iteración #" + i);
}

// Arrays
var colores = ["rojo", "verde", "azul"];
console.log("El segundo color es: " + colores[1]);

// Objetos
var persona = {
  nombre: "Ana",
  edad: 30,
  profesion: "ingeniera"
};
console.log(persona.nombre + " tiene " + persona.edad + " años.");

// Eventos
document.getElementById("miBoton").addEventListener("click", function() {
  console.log("¡Botón clickeado!");
});
