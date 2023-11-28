import {useState} from 'react';
import PropTypes from "prop-types";

export const ConterApp = ({value}) => {

  const[counter] = useState(0);

  const cargar =  () =>{
   // console.log(event);
  
  
  }

  return (
    <>
    <h1>ConterApp</h1>
    <h2> {counter} </h2>

    <button onClick={cargar}>+ 1</button>
    </>
    
  )
}

ConterApp.prototype = {
    value: PropTypes.number.isRequired
}


ConterApp.defaultProps ={
    value: 12345,

} 