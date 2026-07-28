import React, { createContext } from 'react'
export const data = createContext()

const UserContext = ({children}) => {
    let userName = "Neeraj";
  return (
    <div>
        <data.Provider value={userName}>
            {children}
        </data.Provider>
    </div>
  )
}

export default UserContext