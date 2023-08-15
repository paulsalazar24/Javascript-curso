const persona = {
    nombre: 'Tony',
    apellido: 'lex',
    edad: 12,
    direccio:{
        ciudad: 'New Login',
        zip: 23423423,
        lat:-123242342,
        lng:-23434322
    }
};


;

const persona2 = {...persona};

persona2.nombre = 'peter';


console.log(persona)
console.log(persona2);

