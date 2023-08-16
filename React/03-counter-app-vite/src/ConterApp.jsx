import PropTypes from "prop-types";

export const ConterApp = ({value}) => {

  const cargar =  () =>{
    console.log(event);
  }

  return (
    <>
    <h1>ConterApp</h1>
    <h2> {value} </h2>

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