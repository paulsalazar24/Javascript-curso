const usuario ={
    nombre: 'paul',
    pais: 'perú',
};

//estructura tradicional para realizar condicionales 

if(usuario.pais === 'perú'){
    console.log('el usuario es peruano');
}else if(usuario.pais === 'españa'){
    console.log('el usuario es español');
}else if(usuario.pais === 'argentina'){
    console.log('el usuario es argentino');
}

// nueva estrucra mas limpia 


switch(usuario.pais){

    case 'perú':
        console.log('el usuario es peruano');
        break;
        
    case 'españa':
        console.log('el usuario es español');
        break;
        
    case 'argentina':
        console.log('el usuario es argentino');
        break;
        
    default:
        console.log('el usuario es de otro pais');

}






