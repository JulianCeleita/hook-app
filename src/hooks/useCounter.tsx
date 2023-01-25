import { useState } from 'react';

export const useCounter = ( initialValue = 10) => {
    
    const [counter, setCounter] = useState(initialValue)

    const increase = ()=>{
        setCounter (counter + 1)
    }
 
    const reset = ()=>{
        setCounter (initialValue)
    }

    const decrease = (value:number = 1)=>{                //Recibo el valor desde el onclick, en caso de no tenerlo, usará 1 por defecto
        if ( counter === 0 ) return;                      // Fin ciclo
        setCounter (counter - value)
        if ( counter === 1) setCounter(0);
    }
  
  return {
    counter, increase, reset, decrease
}

}
