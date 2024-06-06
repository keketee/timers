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
const inputEntrada = document.getElementById('entrada');
const botonEnviar = document.getElementById('send');

// DECLARACION DE FUNCIONES
function checarInputVacio(valor) {
  const entradaInputNoVacia = valor !== '';

  if (entradaInputNoVacia) {
    botonEnviar.disabled = false;
  } else {
    botonEnviar.disabled = true;
  }
}

function botonPulsado() {
  console.log('has clickado el boton');
  console.log('botonPulsado', inputEntrada.value);
  limpiarInput();
}

function limpiarInput() {
  const prf = document.createElement('p');

  prf.textContent = inputEntrada.value;
  document.querySelector('body').appendChild(prf);
  inputEntrada.value = '';
  checarInputVacio(inputEntrada.value);
}

// INVOCACION DE FUNCION PARA
// DESHABILITAR EL BOTON DE ENVIAR Y BORRAR
checarInputVacio(inputEntrada.value);

// CAPTURA DEL EVENTO DE TECLADO
// PARA LEER EL VALOR DEL INPUT
function manejadorDelKeyUp(evento) {
  console.log(evento);
  console.log(evento.target.value);
  checarInputVacio(evento.target.value);
}

inputEntrada.addEventListener('keyup', manejadorDelKeyUp);
botonEnviar.addEventListener('click', limpiarInput);
