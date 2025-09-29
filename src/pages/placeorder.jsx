import { useContext } from "react";
import { Helper } from "../store/context";
function Placeorder(){
    const {carttotal}=useContext(Helper);
    return <div className="min-h-[calc(100vh-6rem)] p-6 max-w-6xl mx-auto" >
        <div className="flex  mt-30 gap-40 text-gray-600 uppercase font-bold justify-center items-center flex-wrap" >
            <div className="mt-5" >
                <h1 className="text-4xl text-yellow-600">delivery information</h1>
                <div className="mt-5 flex flex-wrap">
                    <input type="text"placeholder="First Name" className="border-2 p-4 rounded-4xl text-sm "/>
                      <input type="text "placeholder="Last Name" className="border-2 p-4 rounded-4xl text-sm mt-4 xl:mt-0 md:mt-0 lg:mt-0"/>

                </div>
                <input type="email"placeholder="Email Address" className="border-2 p-4 rounded-4xl text-sm mt-4 xl:mt-0 md:mt-0 lg:mt-0"/>
                <input type="text"placeholder="Street" className="border-2 p-4 rounded-4xl text-sm mt-4 "/>
                <div className="flex  items-center justify-center flex-wrap ">
                    <input type="text"placeholder="City" className="border-2 p-4 rounded-4xl text-sm mt-4 mr-9 md:mr-0 lg:mr-0 xl:mr-0" />
                    <input type="text" placeholder="State" className="border-2 p-4 rounded-4xl text-sm  mt-4 xl:mt-0 md:mt-0 lg:mt-0 mr-9 md:mr-0 lg:mr-0 xl:mr-0" />
                   
                </div>
                 <input type="number"placeholder="Pincode" className="border-2 p-4 rounded-4xl text-sm mt-4 " />
                    <input type="number"placeholder="Phone-number" className="border-2 p-4 rounded-4xl text-sm mt-4 " />
            </div>
            <div className="">
                  <h1 className="text-3xl font-bold text-gray-700 uppercase mb-4">Cart Totals</h1>
          <div className="flex gap-4 justify-between text-lg">
            <span className="text-2xl">Subtotals</span>
            <span>₹{carttotal()}</span>
          </div>
          <div className="flex gap-4 justify-between text-lg">
            <span className="text-2xl">Delivery Fee</span>
            <span>₹{carttotal()===0?0:40}</span>
          </div>
          <div className="flex  justify-between text-lg font-bold mb-4 ">
            <span className="text-2xl">Total</span>
            <span>₹{carttotal()===0?0:carttotal()+40} </span>
          
          </div>
          <button className="bg-yellow-700 hover:bg-yellow-600 p-3 rounded-4xl text-2xl text-white">PROCEED TO PAYMENT </button>
            </div>
        </div>
        
        </div>

}
export default Placeorder;