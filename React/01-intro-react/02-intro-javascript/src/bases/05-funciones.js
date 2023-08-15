
const saludar = function (nombre) {
    return `Hola, ${nombre}`
};

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
};


const saludar3 = (nombre) => `Hola, ${nombre}`;


const saludar4 = (nombre) => `Hola, mundo`;


console.log(saludar('Goku'));
console.log(saludar2('Goku'));
console.log(saludar3('Goku'));
console.log(saludar4());



const getUser = () => ({
    uid: 'JAHJSA',
    username: ' El pepe'
});

const user = getUser();
console.log(user);



//tarea 

function getUsuarioActivo(nombre){
    return{
        ui: 'jkksda',
        username: 'jskahdkja'
    }
};

const usuarioactivo = getUsuarioActivo('paul');
console.log(usuarioactivo);


const getUsuarioActivo2 = (nombre, apellido) =>({
    ui: 'jkahskjh',
    username: nombre,
    apellidos: apellido
});

console.log(getUsuarioActivo2('paul', 'salazar'));

