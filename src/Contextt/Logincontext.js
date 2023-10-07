import { createContext, useState } from "react";

export let loginContext = createContext()

export default function Logincontextprovider(props){
    let [login , setlogin] = useState(null);

    return <loginContext.Provider value={{login , setlogin}}>
        {props.children}

    </loginContext.Provider>
}