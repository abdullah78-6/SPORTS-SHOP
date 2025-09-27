import { createContext, useState } from "react";

export const Helper=createContext();
export function Gives({children}){
    let[menue,setmenue]=useState("");
    let[login,setlogin]=useState(false);
    let [state,setstate]=useState("SIGN-UP");
    return (
        <Helper.Provider value={{menue,setmenue,login,setlogin,setstate,state}}>
        {children}
        </Helper.Provider>
    )
}
