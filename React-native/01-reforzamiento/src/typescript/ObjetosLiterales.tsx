interface Persona{
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}

interface Direccion{
    pais: string,
    casoNo: number
}


export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto : 'Paul',
        edad: 25,
        direccion:{
            pais: 'Perú',
            casoNo: 615
        }
    }


  return (
    <>
    <h3>Objetos lieterales</h3>
    <code>
        <pre>
        {JSON.stringify( persona, null, 2)}
        </pre>
    </code>
    </>
  )
}


