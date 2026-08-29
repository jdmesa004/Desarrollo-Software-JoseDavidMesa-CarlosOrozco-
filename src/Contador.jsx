import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
          Sumar
      </button>
    </>
  );
}

export default Contador;