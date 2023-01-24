import { useEffect } from 'react';

export const useFetch = ( url: any ) => {

    const getFetch = async ()=> {
        const resp = await fetch (url);
        const data = await resp.json();

        console.log(data);
    }


    useEffect(() => {           // espera funciones puras, no promesas
      
        getFetch();

    }, [url])
    
    
  return {};
}
