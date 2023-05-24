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
const tienePermiso = true;


const permitidoAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);

console.log('acceso permitido: ' + permitidoAcceso)


//ejemplo !

const variable = true;

console.log(!variable);

!tieneEntrada