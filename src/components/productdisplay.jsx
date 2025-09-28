import { sportlist } from "../assets/assests";
import { useContext } from "react";
import { Helper } from "../store/context";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
function Product(){
    const {category,addtocart,removefromcart,cartitems,setcartitems}=useContext(Helper);
    return <div className="p-10" id="p">
        <div className="flex gap-8 flex-wrap justify-center items-center  shadow-md">
            
            {sportlist.map((item,index)=>{
                if(category==="All"||category===item.categorys){
                
                
              return   <div className="bg-white shadow-lg rounded-2xl p-6 w-64 flex flex-col items-center hover:shadow-2xl transition-transform duration-300  " key={index}>
                    <img className="w-40 h-40 object-cover rounded-xl" src={item.image} alt={item.name}/>
                    <h1 className="text-lg font-bold text-gray-800">{item.name}</h1>
                    <p className="text-sm text-gray-600 mt-2 font-bold">{item.descrition}</p>
                    <h1 className="text-xl font-semibold text-yellow-600 mt-3"> ₹{item.price}</h1>
                    {!cartitems[item.id]
                    ?<button className=" font-bold bg-yellow-600 text-gray-600 p-2 rounded-4xl" onClick={()=>addtocart(item.id)}>ADD TO CART</button>
                    :<div className="flex gap-4 text-gray-600 text-2xl items-center justify-center">
                        <FaPlus className="bg-green-600 rounded-4xl text-white text-2xl" onClick={()=>addtocart(item.id)}/>
                        <p className="font-bold ">{cartitems[item.id]}</p>
                        <FaMinus className="bg-red-600 mt-0 rounded-4xl text-white text-2xl" onClick={()=>removefromcart(item.id)}/>

                    </div>
                    }
                
                </div>
                }
                
                
})}
        
        </div>
    </div>

}
export default Product;
