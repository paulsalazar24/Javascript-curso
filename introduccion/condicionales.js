// estructura condicional

const usuario = {
    edad: 27,
    pais: "Perú",
    ticket: true,
};

if(usuario.edad > 17) {
    console.log("si puede entrar al concierto");
} else{
    console.log("EL usuario es menor de edad");
}

// condicionales con operadores 

if(usuario.edad >= 1){
      if(usuario.ticket){
        console.log("el usuario es mayor de edad y tiene ticket");
      }else{
        console.log("el usuario es mayor de edad pero no tiene ticket");
      }
}else{
    console.log("el usuario es menor de edad");
}


if(usuario.pais === "Perú"){
    console.log("el usuario es Perú");
}

