import './App.css';
import textura3 from './img/redstone.jpg';
import Boton  from './componentes/Boton';
import BotonReiniciar from './componentes/BotonReiniciar';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {


  const [ numClick, setNumClick] = useState(0);

  const sumarclick = () => {
    setNumClick( numClick + 1 );
  }

  const menosClick = () => {
    setNumClick( numClick -1 );
  }

  const reiniciarClick = () => {
    setNumClick( 0 );
  };

  return (
    <div className="App" >
      <div className="logo-contenedor">
        <img className="logo-calculadora" src={textura3} alt="logo calculadora" title="Calculadora"/>
      </div>
      <div className="contenedor">
        <Contador numClick={numClick}/>
        <div className="botones">
          <Boton
            texto="touch me"
            esBotonDeClick={true}
            manejarClick={sumarclick}        
          />
          <Boton
            texto="No"
            esBotonDeClick={false}
            manejarClick={menosClick}        
          />
          <BotonReiniciar 
            texto="Adios"
            reiniciarClick={reiniciarClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
