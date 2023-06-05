/*
- PARAMETROS : los valores especificados en la definicion
- ARGUMENTOS: los valores que le pasamos a la funcion cunaod la invocamos 
*/

const saludo = (nombre = 'amigo') => {
    console.log(`hola ${nombre}`);
};

saludo('paul');
saludo('juan');
saludo('pedro');
saludo();  

/*

Multiples parametros

*/

const operacion = (tipo,num1,num2) => {  
   // console.log(num1 + num2);
  // let resultado;

    if (tipo === 'suma') {
        return num1 + num2;
    }else if (tipo === 'resta'){
        return  num1 - num2;
    }

   // return resultado;
};

operacion('suma',123, 2);
operacion('resta',123, 2);




