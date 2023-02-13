import { UserContext } from './'

const user = {
    id: '123',
    name: 'Nombre Aqui',
    email: 'cualquiera@gmail.com'
  }

export const UserProvider = ({ children }:{children:any}) => {
  return (
    <UserContext.Provider value={{ hola: 'mundo', user}}>
        { children }
    </UserContext.Provider>
  )
}