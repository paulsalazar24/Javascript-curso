//desestructuracion 
// asignación desestructurante 

const persona = {
    nombre: 'paul',
    edad: 45,
    clave: 'asdas'
};


console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

console.log('-------------------------');

const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);



const retornaPersona = ({ nombre, edad, rango = 'lol' }) => {
    console.log(nombre, edad, rango);

}

retornaPersona(persona);


const useContext = ({clave, nombre, edad, rango = 'lol' }) => {
    // console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad
    }
}

const data = useContext(persona);

const {nombreClave, anios} = useContext(persona);


console.log(data);
console.log('*-----------------*');
console.log(nombreClave);
console.log(anios);



const useContext1 = ({clave, nombre, edad, rango = 'lol' }) => {
    // console.log(nombre, edad, rango);
    return{
        nombreClave2: clave,
        anios1: edad,
        latlng:{
            lat: -123123123,
            lng: -234323313
        }
    }
}

const {nombreClave2, anios1, latlng:{lat: lng}} = useContext1(persona);
// const {lat, lng} = latlng;

console.log('*-------///----------*');
console.log(nombreClave2, anios1);
console.log(lat, lng);