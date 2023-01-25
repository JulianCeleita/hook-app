import { useCounter } from '../hooks/useCounter';
import { useMemo, useState } from 'react';

interface Counter {
    counter: number;
    increase: () => void;
}

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos...');
    }

    return `${ iterationNumber } iteration performed`
}

export const MemoHook = () => {
    
    const { counter, increase }:Counter = useCounter( 10 );
    
    const [show, setShow] = useState(true);
    
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);       // la constante memoriza el valor que tiene el heavyStuff (counter), y no se renderiza de nuevo hasta que el counter no cambie [counter]
  
    return (
    <>
        <h1> Counter: <small> { counter } </small></h1>
        <hr />

        <h4> { memorizedValue } </h4>

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
