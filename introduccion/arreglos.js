const arreglo = ['hola', 223.3, false,{propiedad: 'valor'}, [1,2,3]];

console.log(arreglo);

const amigos = ['alejadno', 'manuel', 'cesar'];
console.log(amigos[1]);


const colores = [];

colores[0] = 'Rojo';
colores[1] = 'Verde';
colores[4] = 'azul';
colores[4] = 'amarillo'; // sobre escribimos los valores 

console.log('El arreglo colores tiene : ' + colores.length + 'colores');



colores.push('azul');

console.log(colores);