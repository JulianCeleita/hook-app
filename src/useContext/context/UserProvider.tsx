import { UserContext } from './'
import {useState} from 'react';

/* const user = {
    id: '123',
    name: 'This is the name',
    email: 'something@gmail.com'
  } */

export const UserProvider = ({ children }:{children:any}) => {
  
    const [user, setUser] = useState();
  
  return (
    <UserContext.Provider value={{ user, setUser}}>
        { children }
    </UserContext.Provider>
  )
}