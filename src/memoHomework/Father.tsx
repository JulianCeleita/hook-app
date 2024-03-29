import { useState, useCallback } from 'react';
import { Son } from './Son';


export const Father = () => {

    const numbers = [2, 4, 6, 8, 10];

    const [value, setValue] = useState(0);

    const increase = useCallback(
      (num:number) => {
        setValue ( (oldvalue)=> oldvalue + num );
      },
      [],
    )

  return (
    <div>
        <h1> Father </h1>
        <p> Total: { value } </p>

        <hr />

        {
            numbers.map( n => (
                <Son
                    key={ n }
                    number={ n }
                    increase={ increase }
                />
            ))
        }

    </div>
  )
}
