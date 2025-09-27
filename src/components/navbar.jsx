import { useContext } from "react";
import { Helper } from "../store/context";
import { FaShoppingCart } from "react-icons/fa";
function Navbar(){
    const {menue,setmenue,setlogin}=useContext(Helper);

    return <div className=" flex items-center px-6 justify-between  py-3 shadow-md font-bold">
        
        <h1 className="font-bold text-3xl text-blue-600 cursor-pointer ">SPORTS-SHOP</h1>
        
        <ul className=" flex gap-6 font-bold text-2xl text-gray-600 cursor-pointer">
            <li onClick={()=>setmenue("HOME")} className={menue==="HOME"?" border-blue-600 border-b-4 rounded-4xl cursor-pointer ":""}>HOME</li>
            <li onClick={()=>setmenue("PRODUCT")} className={menue==="PRODUCT"?" border-blue-600 border-b-4 rounded-4xl cursor-pointer ":""}>PRODUCTS</li>
            <li onClick={()=>setmenue("MOBILE-APP")} className={menue==="MOBILE-APP"?" border-blue-600 border-b-4 rounded-4xl cursor-pointer ":""}>MOBILE-APP</li>
            <li onClick={()=>setmenue("CONTACT-US")} className={menue==="CONTACT-US"?" border-blue-600 border-b-4 rounded-4xl cursor-pointer ":""}>CONTACT-US</li>
            
        </ul>
        <div className="flex items-center gap-4  font-bold mt-[-20px] mr-5 text-2xl ">
            <h1 className="text-gray-600 text-3xl mt-3 cursor-pointer"><FaShoppingCart /></h1>
            <button className="bg-blue-600 text-white p-[4px] rounded-2xl mt-3 hover:bg-white      hover:text-blue-600" onClick={()=>setlogin(true)}>SIGN-UP</button>
        </div>

    </div>
}
export default Navbar;