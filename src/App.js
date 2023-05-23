import React from 'react';
import './css/stylo.css';
import { useRef, useEffect } from "react";
import { pintarTablero, generarCampoMinasVacio, esparcirMinas, contarMinas, actualizarcantMnas } from './components/BuscaMina'
const buscaminas = {
  numMinasTotales: 0,
  numMinasEncontradas: 0,
  numFilas: 0,
  numColumnas: 0,
  aCampoMinas: []
}

export function App() {
  const tablero = useRef(null);
  useEffect(() => {
    pintarTablero();
    generarCampoMinasVacio();
    esparcirMinas();
    contarMinas();
    actualizarcantMnas();
  }); 

  return (
    <div className="App">
      <header className="App-header">
        <div id="tablero"></div> 
      	<div id="estado">
          <div>
            Cantidad de Minas: 
            <span id="cantMnas"></span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
