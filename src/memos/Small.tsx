import React from 'react';

export const Small = React.memo(({ value }: any) => {         // memo, memoriza lo del parentesis para que solo renderice cuando cambien las properties. SOLO usarlo con componentes muy pesados

    console.log('generado de nuevo')

  return (
    <small> { value } </small>
  )
})
