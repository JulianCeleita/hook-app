import { useEffect, useState } from 'react';

export const Message = () => {
  
  const [coords, setCoords] = useState( {x:0, y:0});
    
    useEffect(() => {

      const onMouseMove = ({x, y}:{x:number, y:number}) => {
        setCoords ({ x, y })
      }

      window.addEventListener( 'mousemove', onMouseMove );

        /* window.addEventListener ( 'mousemove', (event) =>{
            console.log(event);
        } ) */
        //console.log('Message enabled');
    
      return () => {

        window.removeEventListener( 'mousemove', onMouseMove );

        //console.log('UPS Message disabled');        // Al quitar el mensaje, se desmonta el componente.
      }
    }, []);
    
  return (
    <>
    <h3> Usuario ya en uso </h3>
    {JSON.stringify( coords )}                {/* Para mostrar un objeto en html */}
    </>
    )
}
