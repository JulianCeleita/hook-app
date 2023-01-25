import { useFetch, useCounter } from "../hooks";
import { Quote, LoadingQuote } from '../examples';

export const Layout = () => {
    
  const {counter, increase} = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes?${counter}`);
    
  const { author, quote } = !!data && data[0];      // doble negación: ! = false, !! = true desestructuro el author y quote de data, si data es true, entonces muestre el primer valor [0] 
  
  return (
    <>
      <h1> BreakingBad Quotes</h1>

      <hr />

      {
        isLoading 
        ? <LoadingQuote/> 
        : <Quote author={author} quote={quote} /> 
      }

      <button className="btn btn-primary" onClick={ ()=> increase() }> 
      Next quote </button>
    </>
  );
};
