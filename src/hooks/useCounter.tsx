import { useState } from 'react';

export const useCounter = ( initialValue = 10) => {
    
    const [counter, setCounter] = useState(initialValue)

    const increase = ()=>{
        setCounter (counter + 1)
    }

    const reset = ()=>{
        setCounter (initialValue)
    }

    const decrease = ()=>{
        setCounter (counter - 1)
    }


  
  return {
    counter,                            // Regreso el mismo objeto o arreglo, importante ver si estoy retornando un {} o un [] para ponerlo en la const cuando lo use, preferible usar {} para desestructurarlo mas facil
    increase, reset, decrease
}

}
