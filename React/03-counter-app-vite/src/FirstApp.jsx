import PropTypes from "prop-types"


export const FirstApp = ({title, subTitle }) => {


  return (
   <>
    <h1> {title} </h1>
    
     <p>{subTitle}</p>
   </>         
  )
}


//AYUDA A DEFINIR EL TIPO DE DATO Y QUE SEA REQUERIDO

FirstApp.prototype = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps ={
    title: 'no hay titulo',
    subTitle: 'no hay subtitulo'
}