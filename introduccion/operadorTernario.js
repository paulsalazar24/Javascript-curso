const boleto = 'vip';
let codigoAcceso;

//condicion tradicional

if (boleto === 'vip') {
    codigoAcceso = 'VIP-123-456';   
} else{
    codigoAcceso = 'REGULAR-234-345';
}

console.log(codigoAcceso);

//haciendo uso del operador ternario

const codigoVaalor = (boleto === 'vip') ? 'VIP-123-456' : 'REGULAR-234';

console.log(codigoVaalor);

//OTRA MANERA DE ACOMODAR LOSMOPERADORES TERNARIOS

(boleto === 'vip') 
? 
console.log('Tu boleto es de tipo VIP')
: 
console.log('Tu boleto es de tipo REGULAR');



