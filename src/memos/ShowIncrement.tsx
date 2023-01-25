import React from 'react';

export const ShowIncrement = React.memo(({ increase }: any) => {
  
    console.log('Me dibujé de nuevo');
  
    return (
        <button
            className="btn btn-primary"
            onClick={ ()=> {
                increase();
            }}
        > 
            Incrementar 
        </button>
    )
})
