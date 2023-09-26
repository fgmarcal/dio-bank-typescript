import  { createContext, useState } from "react";

interface IAppContext {
    username : string;
    logged : boolean
}

export const AppContext = createContext({} as IAppContext);


const AppContextProvider = ({children}:any) =>{

    const [username, setUsername] = useState("");
    const [logged, setLogged] = useState(false)


    return (
        
        <AppContext.Provider value={{username, logged}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;