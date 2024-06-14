// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';

//PARA CRAR INTERVALOS

// let counter = 0;
// let intervalo;

// function crearIntervalo() {
//   if (intervalo) {
//     destruirIntervalo();
//     counter = 0;
//   }
//   intervalo = setInterval(() => {
//     counter++;
//     console.log(counter);
//   }, 1000);
// }

// function destruirIntervalo() {
//   clearInterval(intervalo);
// }

//ponemos crearIntervalo() para empezar el intervalo

//ponemos destruirIntervalo() para quitar el intervalo

//////////////////////////////////////////////////////////////////////////////////

//ESTO ES PARA HACER UN INPUT QUE CUANDO SE ESCRIBA ALGO SE HABILITE EL BOTON

// BUSQUEDA DE ELEMENTOS
// DEL DOM CON SELECTORES
// const inputEntrada = document.getElementById('entrada');
// const botonEnviar = document.getElementById('send');

// // DECLARACION DE FUNCIONES
// function checarInputVacio(valor) {
//   const entradaInputNoVacia = valor !== '';

//   if (entradaInputNoVacia) {
//     botonEnviar.disabled = false;
//   } else {
//     botonEnviar.disabled = true;
//   }
// }

// function botonPulsado() {
//   console.log('has clickado el boton');
//   console.log('botonPulsado', inputEntrada.value);
//   limpiarInput();
// }

// function limpiarInput() {
//   const prf = document.createElement('p');

//   prf.textContent = inputEntrada.value;
//   document.querySelector('body').appendChild(prf);
//   inputEntrada.value = '';
//   checarInputVacio(inputEntrada.value);
// }

// // INVOCACION DE FUNCION PARA
// // DESHABILITAR EL BOTON DE ENVIAR Y BORRAR
// checarInputVacio(inputEntrada.value);

// // CAPTURA DEL EVENTO DE TECLADO
// // PARA LEER EL VALOR DEL INPUT
// function manejadorDelKeyUp(evento) {
//   console.log(evento);
//   console.log(evento.target.value);
//   checarInputVacio(evento.target.value);
// }

// inputEntrada.addEventListener('keyup', manejadorDelKeyUp);
// botonEnviar.addEventListener('click', limpiarInput);

// let counter = 0;

// for (let i = 1; i <= 10; i++) {
//   counter += i;
// }

// console.log(`La suma de los números del 1 al 10 es: ${counter}`);

// let numeros = [1, 3, 7, 5, 8, 9, 2, 6, 3, 7, 1];

// for (let index = 0; index < numeros.length; index++) {
//   let numero = numeros[index];
//   if (numero > 5) {
//     console.log(index);
//   }
// }

// const texto =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi saepe iste architecto fugit consectetur quos facere aliquam beatae quae, cumque illo labore necessitatibus sunt voluptatem numquam dolor odit quis.';

// for (const palabra of texto.split(' ')) {
//   // console.log(palabra);
//   if (palabra.includes('e')) {
//     console.log(palabra);
//   }
// }

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// for (let key in person) {
//   console.log(key + ': ' + person[key]);
// }

// const objeto = {
//   prop: 'valor1',
//   propiedad: 'valor2',
//   caracteristica: 'valor3',
//   algomas: 'valor4',
//   otraPropiedadMasLarga: 'valor5',
//   sol: 'valor6',
//   nombreLargoPropiedad: 'valor7'
// };

// for (const key in objeto) {
//   console.log(key);
// // }

function suma(numero1, numero2) {
  console.log(`el numero ${numero1} mas el numero ${numero2} es ${numero1 + numero2} `);
}

suma(5, 7);

function saludar(nombre) {
  console.log(`hola ${nombre} que tal`);
}

saludar('antonio');

function multiplicar(numero1, numero2) {
  let multiplicador = numero1 * numero2;
  console.log(`el numero ${numero1} multiplicado por el numero ${numero2} es ${multiplicador} `);
}
multiplicar(8, 9);

function calcularDescuento(precio) {
  let descuento = (precio * 21) / 100;

  console.log(`el descuento es ${descuento} por lo que me sale a pagar ${precio - descuento}`);
}

calcularDescuento(50);

function celsiusAFarenheit(celsius) {
  const cambio = (celsius * 9) / 5 + 32;
  console.log(`los grados son ${cambio}`);
}

celsiusAFarenheit(50);

function calcularEdad(añoActual, añoDeNacimiento) {
  const resultado = añoActual - añoDeNacimiento;
  console.log(`mi edad actual es ${resultado}`);
}

calcularEdad(2024, 1991);

const division = function (a, b) {
  return a / b;
};

const numero = 5;
console.log(division(10, numero));

const multiplicare = (a, b, c) => a * b * c;

let numeros = 5;
console.log(multiplicare(3, numeros, numeros));
