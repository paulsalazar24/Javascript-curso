/* Block scope / alcance de tipo bloque 
   - pertenecen las variables declaradas con const o let dentro ded un bloque {}
   - solo podemos acceder a ellas dentro del bloque
*/

const edad = 19;

if (edad >= 18) {
    //variable dentro del bloque
    const accesoPermitido = true;
    console.log(accesoPermitido);

    if(true){
        console.log(accesoPermitido);
    }

    const miFuncion = () => {
        console.log(accesoPermitido);
    };
    miFuncion();
}

//variable global
const accesoPermitido = 'si';


