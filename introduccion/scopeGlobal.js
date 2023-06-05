/*Globla scope o variables globales
    - son variables declarativas fuera de una funcion
    -podemos acceder a ellas desde cualquier parte del codigo
    - podemos usar const, let y var
*/


var nombre = 'carlos';
console.log(nombre);

const saludo = () => {
    console.log('hola' + nombre);

    nombre = 'paul';
    console.log('el nuevo nombre es: ', nombre);
}

saludo();