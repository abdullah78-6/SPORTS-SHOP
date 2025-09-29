import { createContext, useState } from "react";
import { sportlist } from "../assets/assests";

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
    function carttotal(){
        let total=0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo=sportlist.find((product)=>product.id===item);
                total=total+iteminfo.price*cartitems[item];

            }
        }
        return total;

}
    return (
        <Helper.Provider value={{menue,setmenue,login,setlogin,setstate,state,category,setcategory,addtocart,removefromcart,carttotal,cartitems,setcartitems}}>
        {children}
        </Helper.Provider>
    )
}
