/**
 * 
 * OPERADORES LOGICOS
 * 
 * 
 *  && And
 *  || OR
 *  !  NOT
 * 
 * 
 */

const nombre = 'carlos';
const edad = 18;
const tieneEntrada = true;
const permitidoAcceso = edad >= 18 && tieneEntrada;

console.log('acceso permitido: ' + permitidoAcceso)