import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUsuario = () => {


  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(1);

  useEffect(() => {
    cargarUsuarios()
  }, [])

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current
      }
    })

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      paginaRef.current --;
      alert('No hay mas registros')
    }


  }
  const paginaSguiente = () => {
    paginaRef.current ++;
    cargarUsuarios();

  }

  const paginaAnterior = () => {
    if(paginaRef.current > 1){
      paginaRef.current --;
      cargarUsuarios();
    }


  }


  return {
    usuarios,
    paginaSguiente,
    paginaAnterior

  }


}