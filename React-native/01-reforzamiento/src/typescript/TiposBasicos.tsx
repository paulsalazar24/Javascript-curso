
export const TiposBasicos = () => {

    const nombre: string  = 'paul';
    const edad:number = 25;
    const estadoActivo:boolean = true;

    const poderes:string[] = ['Velocidad', 'Volar', 'Respirar en el agua']

  return (
    <>
        <h3>Tipos basicos</h3>
        {nombre}, {edad}, {( estadoActivo) ? 'activo' : 'no activo'}
        <br/>
        {poderes.join(', ')}
    </>
  )
}
