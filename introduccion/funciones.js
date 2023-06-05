//forma 1

function saludo(){
    console.log("Hola Mundo");
}

saludo();

//forma 2 - asignando una funcion a una variable

const saludoi = function(){
    console.log("hola desde variable");
};

saludoi();

// forma 3 - funcion de tipo flecha

const hola = () =>{
    console.log("hola desde funcion FLECHA");
};

const adios = () => console.log("hola desde funcion FLECHA");

adios();
hola();



