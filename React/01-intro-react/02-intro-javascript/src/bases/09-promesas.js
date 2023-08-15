import getHeroeById from './bases/08-import';

// las promesas son asincronas 


const promesa = new Promise( (resolve, reject) =>{
    setTimeout( () => {
        const heroe = getHeroeById(2);
        // console.log(heroe);
        // console.log('2 segundos despues')
          resolve(heroe);
      //  reject('No se pudo encontrar el héroe');
    }, 2000)

});


promesa.then( (resp) => {
    console.log('Heroe', resp)
})
.catch( err => console.warn(err));


console.log('2 manera');

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el héroe');
            }
            // console.log(heroe);
            // console.log('2 segundos despues')
            
          //  reject('No se pudo encontrar el héroe');
        }, 2000)
    
    });
}


getHeroeByIdAsync(20)
    .then(console.log)
    .catch( console.warn );



