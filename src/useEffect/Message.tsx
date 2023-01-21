import { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
      console.log('Message enabled');
    
      return () => {
        console.log('UPS Message disabled');        // Al quitar el mensaje, se desmonta el componente.
      }
    }, [])
    
  return (
    <>
    <h3> Usuario ya en uso </h3>
    </>
    )
}
