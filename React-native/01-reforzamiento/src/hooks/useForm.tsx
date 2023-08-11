import { useState } from "react";

export const useForm = () => {

    const [formulario, setFormulario] = useState({
        email: 'test@gmail.com',
        password: '12345'
    });
    
    const onChange = (value:string, campo:string) => {
        setFormulario({
            ...formulario,
            [campo]: value,
        });
    
    }
    

    return {
        onChange,
        formulario
    }
    

}


