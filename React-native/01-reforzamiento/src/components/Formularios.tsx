import { useState } from "react"

export const Formularios = () => {


const {
     = useForn 
}

  return (
    <>
    <h3>Formulario</h3>
    <input type="text" className="form-control" placeholder="Email"
    value={formulario.email}
    onChange={({target})=> onChange(target.value, 'email')}/>
      
    <input type="text" className="form-control mt-2 mb-2" placeholder="password"
     value={formulario.password}
     onChange={({target})=> onChange(target.value, 'password')}/>

    <code>
        <pre>
            {JSON.stringify(formulario, null, 2)}
        </pre>
    </code>
    </>
  )
}


