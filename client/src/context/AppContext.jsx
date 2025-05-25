// create context

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

// Provide Context Value (Wrap main Component)

export const AppContextProvider = ({children}) =>{
    
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)

    const value = {navigate,user,setUser,isSeller,setIsSeller,showUserLogin,setShowUserLogin}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


// consume context value

export const useAppContext = () => {
    return useContext(AppContext)
}