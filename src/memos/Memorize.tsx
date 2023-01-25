import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';
import { useState } from 'react';

interface Counter {
    counter: number;
    increase: () => void;
}

export const Memorize = () => {

    const { counter, increase }:Counter = useCounter( 10 );

    const [show, setShow] = useState(true);

  return (
    <>
        <h1> Counter: <Small value={ counter } />  </h1>
        <hr />

        <button 
            className="btn btn-primary mt-3"
            onClick={ ()=> increase() }                 // Se pone de esta manera porque le he pasado un argumento
        >
            +1
        </button>

        <button
            className='btn btn-outline-primary'
            onClick={ ()=> setShow (!show)}        
        >
            Show/Hide { JSON.stringify(show)}
        </button>
        
    </>
  )
}
