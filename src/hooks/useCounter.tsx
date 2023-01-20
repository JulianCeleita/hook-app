import { useState } from 'react';

export const useCounter = ( initialValue = 10) => {
    
    const [counter, setCounter] = useState(initialValue)
  
  return {
    counter,                            // Regreso el mismo objeto o arreglo, importante ver si estoy retornando un {} o un [] para ponerlo en la const cuando lo use, preferible usar {} para desestructurarlo mas facil
  }

}
