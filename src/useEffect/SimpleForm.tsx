import { useState } from 'react';


export const SimpleForm = () => {

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
