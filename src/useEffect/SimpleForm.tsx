import { useState, useEffect } from 'react';


export const SimpleForm = () => {

    // USESTATE

    const [formState, setFormState] = useState({
        username: 'delta',
        email: 'delta@gmail.com'
    });

    const { username, email } = formState;      //Obtengo el username-email del formState

    const onInputChange = ( {target}: {target:any} )=> {      // le paso el target que viene del evento al presionar click
        const { name, value } = target;                       // desestructuro el name y el value del target, arriba le paso el target y en este renglos desestructuro
        setFormState({                                        // al formstate le doy los nuevos valores
            ...formState,                                     // conservo los valores de lo que no quiero cambiar
            [ name ]: value                                   // propiedad name va a tener establecido el nuevo value, me permite escribir y que aparezca en el campo de texto
        });
    }

    // USEEFFECT
    // ejecuta una función al ser llamado (callBack), el segundo valor es el que al cambiarse dispara el useEffect, si está solo con [] se dispara solo la 1er vez que se renderiza

    useEffect(() => {           
      console.log('UseEffect render');
    }, [])                                  // Solo la 1er vez que se renderiza
    
    useEffect(() => {
      console.log('form changed')
    }, [ formState ])                        // Al cambiar el cualquier cosa en el formulario
    
    useEffect(() => {
      console.log('email changed')
    }, [ email ])                           // Al cambiar el email
    

  return (
    <>
        <h1> Formulario Simple</h1>

        <hr />

        <input 
        type="text" 
        className="form-control" 
        placeholder="Username"
        name="username"
        value={ username }
        onChange= { onInputChange }
        />

        <input 
        type="email" 
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={ email }
        onChange= { onInputChange }
        />
    
    </>
  )
}
