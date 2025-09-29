import { useContext } from "react";
import { Helper } from "../store/context";
function Loginpop() {
    const { state, setstate, setlogin } = useContext(Helper);
    return <div className=" fixed  inset-0  flex items-center justify-center font-bold ">
        <div className="w-80 lg:w-120 md:w-120 xl:w-120 bg-blue-600 text-white font-semibold p-4 rounded-4xl" >
            <div > 
                <div className="flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold">{state}</h1>
                <h1 className="text-end text-red-600 text-3xl mt-[-1px] cursor-pointer" onClick={() => setlogin(false)}> ✕</h1>
                </div>
            </div>
            <form>
                <div className="mt-3">
                    {state === "LOGIN" ? <></> : <input type="text" className=" border-2 rounded-4xl p-2" placeholder="ENTER-NAME" required />}
                    <input type="email" className=" border-2 rounded-4xl p-2 ml-0 mb-2 mr-1 mt-2 md:ml-3 lg:ml-3 xl:ml-3 lg:mt-0 xl:mt-0 " placeholder="EMAIL-ID" required />
                    <input type="password" className=" border-2 rounded-4xl p-2 mt-0 mb-2 xl:mt-3 lg:mt-3 " placeholder="PASSWORD" required />
                </div>
                <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-4xl font-bold">{state==="SIGN-UP"?"CREATE  ACCOUNT":"LOGIN"}</button>
                <div className="mt-3">
                <input className="w-4 h-4 mr-2 border-gray-300 rounded-sm"  type="checkbox" required />
                <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl font-bold">BY CONTINUING I AGREE WITH TERMS AND CONDETIONS AND PRIVACY POLICY </p>
                </div>
                {state==="LOGIN"
                ?<p className="text-sm lg:text-2xl xl:text-2xl md:text-2xl font-bold">CREATE AN ACCOUNT <span className=" inline-block cursor-pointer bg-white text-blue-600 p-2 rounded-4xl ml-3  font-bold  mt-5" onClick={()=>setstate("SIGN-UP")}>CLICK HERE</span></p>:
                <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl font-bold">ALREADY HAVE BEEN A ACCOUNT<span className=" inline-block cursor-pointer bg-white  text-blue-600 p-2  rounded-4xl ml-5 font-bold mt-5 " onClick={()=>setstate("LOGIN")}>CLICK HERE</span> </p>
                }
                
            </form>
        </div>
    </div>

}
export default Loginpop;