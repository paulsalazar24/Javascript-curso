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


console.log(persona.suscripciones.correo );
