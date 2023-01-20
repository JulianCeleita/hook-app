import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const initialCounter = 10

    const { counter } = useCounter();                // Como retorné un {} desde el customHook uso las {} en el const

    return (
        <>
        
        <h1> Counter With Hook: {counter} </h1>

        <hr />

        <button className="btn btn-primary" onClick={()=>{setCounter (counter + 1) } }> +1 </button>
        <button className="btn btn-primary" onClick={()=>{setCounter (initialCounter)}}> Reset </button>
        <button className="btn btn-primary" onClick={()=>{setCounter (counter - 1)}}> -1 </button>

        </>
    )
}
