import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     email: 'rohatiro@gmail.com',
//     id: 123,
//     name: 'Roberto Tienda'
// }

export const UserProvider = ({ children }) => {
  const [ user, setUser ] = useState();
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
