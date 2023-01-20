import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    // Traigo el counter desde el customHook:
    const { counter, increase, reset, decrease } = useCounter();                // Como retorné un {} desde el customHook uso las {} en el const

    return (
        <>
        
        <h1> Counter With Hook: {counter} </h1>

        <hr />

        <button className="btn btn-primary" onClick={increase}> +1 </button>
        <button className="btn btn-primary" onClick={reset}> Reset </button>
        <button className="btn btn-primary" onClick={decrease}> -1 </button>

        </>
    )
}
