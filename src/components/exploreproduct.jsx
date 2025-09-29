import { menulist } from "../assets/assests";
import { useContext, useState } from "react";
import { Helper } from "../store/context";
function Exploreproduct(){
    const {category,setcategory}=useContext(Helper);
    return <div >
        <div className="flex justify-center items-center flex-wrap" >
            <div >
            <h1 className="text-gray-600 text-2xl md:text-4xl lg:text-4xl mt-10 text-center font-bold  ">EXPLORE OUR PRODUCTS </h1>
            <p className="text-2xl ml-15 md:ml-0 lg:ml-15 xl:text-center xl:ml-0 text-gray-600 mt-4 font-bold   ">HERE IS THE LIST OF OUR TOP QUALITY PRODUCTS YOU CAN ORDER FROM OUR OFFICIAL WEBSITE </p>
            </div>
           

        </div>
                <div className="flex justify-center items-center gap-10 mt-6  md:overflow-hidden lg:overflow-hidden flex-wrap">
        {menulist.map((item,index)=>(
            

                    <div key={index} onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} className=" flex flex-col items-center justify-center  ">
                    
                <img className={category===item.menu_name?" w-20 md:w-40 lg:w-40  border-4 border-gray-600 rounded ":"w-30"}   src={item.menu_image}alt="product-image"/>
                <h1 className="text-gray-600 text-sm md:text-2xl lg:text-2xl font-bold uppercase">{item.menu_name}</h1>
                </div>
                       
                
                
                
                
                
            
                
            

           ))} 
           </div> 


        
    </div>

}
export default Exploreproduct;