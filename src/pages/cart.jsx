import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Helper } from "../store/context";
import { sportlist } from "../assets/assests";
import { RxCross1 } from "react-icons/rx";

function Cart() {
  const navgate = useNavigate();
  const { cartitems, removefromcart,carttotal } = useContext(Helper);

  return (
    <div className="min-h-[calc(100vh-6rem)] p-6 max-w-6xl mx-auto">

      <ul className="hidden md:flex justify-between items-center uppercase font-bold text-gray-600 text-lg border-b-2 pb-3 mb-6">
        <li className="w-24 text-center">Item</li>
        <li className="flex-1 text-left">Title</li>
        <li className="w-24 text-center">Price</li>
        <li className="w-24 text-center">Quantity</li>
        <li className="w-24 text-center">Total</li>
        <li className="w-10 text-center">Remove</li>
      </ul>

      <div className="flex flex-col gap-4">
       {Object.values(cartitems).every((qty)=>qty===0)?(
       <h1 className="text-center text-3xl font-bold text-gray-600 mt-20">YOUR CART IS EMPTY </h1> 
       ):(
        sportlist.map((item) => {
          if (cartitems[item.id] > 0) {
            return (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center md:justify-between gap-4 p-4 border rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl shadow-sm"
                />
                <p className="flex-1 text-lg font-semibold text-gray-700 text-center md:text-left">
                  {item.name}
                </p>
                <p className="w-24 text-center text-gray-600 font-bold">
                  ₹{item.price}
                </p>
                <p className="w-24 text-center text-gray-600 font-bold">
                  {cartitems[item.id]}
                </p>
                <p className="w-24 text-center text-gray-700 font-bold">
                  ₹{item.price * cartitems[item.id]}
                </p>
                <RxCross1
                  onClick={() => removefromcart(item.id)}
                  className="text-red-600 text-xl cursor-pointer hover:text-red-800"
                />
              </div>
            
            );
          
        }
        })
        
          
        )}
        
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between gap-6">

        <div className="flex-1 border p-6 rounded-2xl shadow-md bg-gray-50 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-700 uppercase mb-4">Cart Totals</h1>
          <div className="flex justify-between text-lg">
            <span>Subtotals</span>
            <span>₹{carttotal()}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Delivery Fee</span>
            <span>₹{carttotal()===0?0:40}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Total</span>
            <span>₹{carttotal()===0?0:carttotal()+40} </span>
          </div>
          <button
            className="bg-yellow-600 text-gray-600 p-4 rounded-2xl uppercase font-bold w-full hover:bg-yellow-500 transition-colors"
            onClick={() => navgate("/placeorder")}
          >
            Proceed to Checkout
          </button>
        </div>

        <div className="flex-1 border p-6 rounded-2xl shadow-md bg-gray-50 flex flex-col gap-4">
          <p className="text-2xl uppercase text-gray-600 font-bold">
            If you have a promo code enter it here
          </p>
          <input
            type="text"
            placeholder="PROMO-CODE"
            className="border-2 border-gray-800 rounded-2xl p-3 text-lg font-bold text-gray-600 w-full"
          />
          <button className="text-lg uppercase font-bold text-white bg-yellow-600 p-3 rounded-2xl w-full hover:bg-yellow-500 transition-colors">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
