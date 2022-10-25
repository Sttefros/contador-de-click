import React from "react";
import '../styles/Contador.css';

function Contador({ numClick }){
    return (
        <div className="contador">
            { numClick }
        </div>
    );
};


export default Contador;