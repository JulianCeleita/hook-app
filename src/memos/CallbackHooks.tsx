import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {

    const [counter, setCounter] = useState(10);

    const increaseFather = useCallback(         // Memoriza en memoria para no renderizar el componente completo
      (value:number) => {
        setCounter ( (c)=> c + value );         // c del counter, le estoy pasando el value desde el ShowIncrement, tomo c que es el valor del counter, y le sumo value (5)
      },
      [],
    )

  return (
    <>
    <h1> useCallback Hook: { counter } </h1>
    <hr />

    <ShowIncrement increase={ increaseFather } />

    </>

  )
}
 