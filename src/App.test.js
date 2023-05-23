import { render, screen } from '@testing-library/react';
import App from './App';
import { resolverTablero } from './components/BuscaMina'

describe('Probando Funcion Dibujar Tabla', ()=>{
  render(<App />);
  it('Resuelve el tablero',()=>{
    const resultado = resolverTablero(false)
    expect(resultado).toEqual(false);
  });
});