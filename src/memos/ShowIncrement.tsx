import React from 'react';

export const ShowIncrement = React.memo(({ increase }: any) => {
  
    console.log('Me dibujé de nuevo');
  
    return (
        <button
            className="btn btn-primary"
            onClick={ ()=> {
                increase( 5 );              // Incrementará de 5 en 5, le paso este valor como value al useCallback
            }}
        > 
            Incrementar 
        </button>
    )
})
