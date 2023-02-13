import { useContext } from "react";
import { UserContext } from "./context";

export const LoginPage = () => {

  const { user, setUser }:any = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button 
        className="btn btn-danger"
        onClick={()=>setUser({id:123, name:"Julián", email:"julian@gmail.com"})}
      >Set Info</button>
    </>
  );
};
