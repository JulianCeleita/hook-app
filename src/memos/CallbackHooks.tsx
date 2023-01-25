import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {

    const [counter, setCounter] = useState(10);

    const increaseFather = useCallback(         // Memoriza en memoria para no renderizar el componente completo
      () => {
        setCounter ( (value)=> value + 1 );    // El valor que le dará a value será el value anterior + 1
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
