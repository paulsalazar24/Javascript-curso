import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUsuario = () =>{


    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);
    
    useEffect(() => {
        caragarUsuarios()
    },[])
    
    const caragarUsuarios = async() =>{
      const resp = await reqResApi.get<ReqResListado>('/users',{
        params:{
          page: paginaRef.current
        }
      })
    
      if(resp.data.data.length > 0){
        console.log(resp.data);
        setUsuarios(resp.data.data);
        paginaRef.current ++;
      }else{
        alert('No hay mas registros')
      }
    
      
    }
    
    
    return{
        usuarios,
        caragarUsuarios
    }


}