
const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2])
console.log('------------------Desestructuracion:-----------------')
const [ , , p3] = personajes;
console.log(p3)


const retornaArreglo = () =>{
    return ['asc', 123];
}

const [letras, number] = retornaArreglo();
console.log(letras, number);


//tarea

const useState = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}];
}

const [nombre, setNombre] = useState('paul');
console.log(nombre);
setNombre();





