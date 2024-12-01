import React,{createContext} from 'react'

export const UserDataContext = createContext();

const UserContext = ({children}) => {

    const [user, setUser] = React.useState({
        email: '',
        fullname: {
            firstname: '',
            lastname: '',
        }
    })

  return (
    <UserDataContext.Provider value={{user, setUser}}> 
    {children}
    </UserDataContext.Provider>
  )
}

export default UserContext