import { useEffect, useState } from 'react';

export const useFetch = ( url: any ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,                     //Null porque no tengo ningun error
    })

    const getFetch = async ()=> {

        setState({
            ...state,
            isLoading:true,
        })

        const resp = await fetch (url);
        const data = await resp.json();

        setState({
            data,
            isLoading:false,
            hasError:null
        })
    }

    useEffect(() => {           // espera funciones puras, no promesas
      
        getFetch();

    }, [url])
    
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
