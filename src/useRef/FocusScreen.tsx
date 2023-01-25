import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = ()=> {
        inputRef.current.select();              // en el inputRef, seleccione lo que actualmente esté alli, para ponerle el foco
    }

  return (
    <>
        <h1> Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef}
            type="text" 
            placeholder="Your name"
            className="form-control"
        />

        <button className="btn btn-primary mt-3" onClick={ onClick }>
            Set focus
        </button>
    
    </>
  )
}
