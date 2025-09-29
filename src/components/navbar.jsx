import { useContext } from "react";
import { Helper } from "../store/context";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom"
function Navbar(){
    const {menue,setmenue,setlogin,carttotal}=useContext(Helper);

    return <div className=" flex items-center px-6 justify-between  py-3 shadow-md font-bold">
        
        <a href="#h"><h1 className="font-bold text-3xl text-blue-600 cursor-pointer ">SPORTS-SHOP</h1></a>
        
        <ul className=" flex gap-6 font-bold text-2xl text-gray-600 cursor-pointer">
        <Link to="/"><li onClick={()=>setmenue("HOME")} className={menue==="HOME"?" border-blue-600 border-b-4 rounded-4xl cursor-pointer ":""}>HOME</li></Link>
        <a href="#p"><li onClick={()=>setmenue("PRODUCT")} className={menue==="PRODUCT"?" border-blue-600 border-b-4 rounded-4xl cursor-pointer ":""}>PRODUCTS</li></a>
            <a href="#app"><li onClick={()=>setmenue("MOBILE-APP")} className={menue==="MOBILE-APP"?" border-blue-600 border-b-4 rounded-4xl cursor-pointer ":""}>MOBILE-APP</li></a>
            <a href="#c"><li onClick={()=>setmenue("CONTACT-US")} className={menue==="CONTACT-US"?" border-blue-600 border-b-4 rounded-4xl cursor-pointer ":""}>CONTACT-US</li></a>
            
        </ul>
        <div className="flex items-center gap-4  font-bold mt-[-20px] mr-5 text-2xl ">
           
            <Link to="/cart" className="relative mt-3">
            <h1 className=" relative text-gray-600 text-3xl mt-3 cursor-pointer"><FaShoppingCart /></h1>
            

            
            {carttotal()===0?"":<span className="absolute top-0 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-white text-xs">

            </span>}
            
            </Link>
            
            <button className="bg-blue-600 text-white p-[4px] rounded-2xl mt-3 hover:bg-white      hover:text-blue-600" onClick={()=>setlogin(true)}>SIGN-UP</button>
        </div>

    </div>
}
export default Navbar;