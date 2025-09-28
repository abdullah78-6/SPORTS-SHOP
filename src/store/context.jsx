import { createContext, useState } from "react";

export const Helper=createContext();
export function Gives({children}){
    let[menue,setmenue]=useState("");
    let[login,setlogin]=useState(false);
    let [state,setstate]=useState("SIGN-UP");
    let [category,setcategory]=useState("All");
    let [cartitems,setcartitems]=useState({});
    function addtocart(itemid){
        if(!cartitems[itemid]){
            setcartitems((prev)=>({...prev,[itemid]:1}));

        }
        else{
            setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }

    }
    function removefromcart(itemid){
       setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}));

    }
    function carttotal(itemid){

    }
    return (
        <Helper.Provider value={{menue,setmenue,login,setlogin,setstate,state,category,setcategory,addtocart,removefromcart,carttotal,cartitems,setcartitems}}>
        {children}
        </Helper.Provider>
    )
}
