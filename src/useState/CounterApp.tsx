import { useState } from 'react';


export const CounterApp = () => {

    //const [counter, setCounter] = useState(10);            // Llamamos el useState y le damos el valor inicial (counter - 10) y el modificado (setCounter)

    const [state, setCounter] = useState({                   // State va a ser el objeto de contadores, abajo lo desestructuro individualmente
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const {counter1, counter2, counter3} = state;            // Como state es un objeto arriba, lo desestructuro para sacar cada una de sus partes individualmente.

  return (
    <>
    
        <h1> Counter: {counter1} </h1>
        <h1> Counter: {counter2} </h1>
        <h1> Counter: {counter3} </h1>

        <hr />

        <button className='btn' onClick={()=> setCounter ({
            ...state,                           // al usar los ...state dejo todo el arreglo de partes del objeto intacto y abajo sobreescribo solo los valores que quiera 
            counter1: counter1 + 1,

        }) } > +1 </button>         {/* Llamamos función al dar click en el botón que le sume 1 solo al counter1 y arroje el nuevo setCounter, className: btn es de bootstrap por defecto */}
    
    </>
  )
}
