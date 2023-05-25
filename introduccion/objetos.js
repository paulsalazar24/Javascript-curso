const personaArreglo = ['calos', 27 ,'coreeer@uopo', true. true];

const persona = {
    nombre: 'paul',
    edad: 25,
    correo: 'correo@pn',
    suscripciones:{     
        web:true,
        correo: true
    },
    coloresFavoritos:['Negro','Rojo'],
    saludo: function(){
        alert('Hola!')
    },
};


console.log(persona.nombre);
console.log(persona['edad']);



const variable = 'suscripciones';

persona.pais = 'Persona';

console.log(persona.suscripciones.correo );
 
//acceder a una funcion de un objeto
persona.saludo();