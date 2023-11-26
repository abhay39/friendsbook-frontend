"use client"
import { createContext, useState } from "react"

export const Authentication=createContext({})

const AuthenticationManager=({children})=>{

    const [userState,setUserState] =useState(false);
    const [userDetails,setUserDetails] = useState('Abhay');

    return(
        <Authentication.Provider value={{
            userState,
            userDetails,
            setUserState,
            setUserDetails
        }}>
            {children}
        </Authentication.Provider>
    )
}

export default AuthenticationManager