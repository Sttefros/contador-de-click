import React from 'react';
import '../styles/Boton.css';

function Boton({texto, esBotonDeClick, manejarClick}){
  return(
    <button className={ esBotonDeClick ? "click-mas" : "click-menos"} onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;