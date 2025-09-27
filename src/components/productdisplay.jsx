import { sportlist } from "../assets/assests";
import { useContext } from "react";
import { Helper } from "../store/context";
function Product(){
    const {category}=useContext(Helper);
    return <div className="p-10">
        <div className="flex gap-8 flex-wrap justify-center items-center  shadow-md">
            
            {sportlist.map((item,index)=>{
                if(category==="All"||category===item.categorys){
                
                
              return   <div className="bg-white shadow-lg rounded-2xl p-6 w-64 flex flex-col items-center hover:shadow-2xl transition-transform duration-300  " key={index}>
                    <img className="w-40 h-40 object-cover rounded-xl" src={item.image} alt={item.name}/>
                    <h1 className="text-lg font-bold text-gray-800">{item.name}</h1>
                    <p className="text-sm text-gray-600 mt-2 font-bold">{item.descrition}</p>
                    <h1 className="text-xl font-semibold text-yellow-600 mt-3">${item.price}</h1>
                
                </div>
                }
                
                
})}
        
        </div>
    </div>

}
export default Product;
