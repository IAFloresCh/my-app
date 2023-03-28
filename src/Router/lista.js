import React, { useState } from 'react';

function Llista() {
  const [seleccionado, setSeleccionado] = useState("");
  const element = () => {
    setSeleccionado(seleccionado);
  };
  return (
    <ul>
      <li onClick={element}>Elemento 1</li>
      <li onClick={element}>Elemento 2</li>
      <li onClick={element}>Elemento 3</li>
      <p>Has seleccionado: {seleccionado}</p>
    </ul>
  );
}
export default Llista;