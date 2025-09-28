import { assest } from "../assets/assests";

function Mobileapp(){
    return <div className="mt-7" id="app">
        <div>
            <h1 className="text-center text-4xl font-bold text-gray-600">GET OUR APP FROM PLAY-STORE AND A APP-STORE</h1>
            

        </div>
        <div className="flex justify-center items-center flex-wrap gap-6">
        <img src={assest.playstore}/>
            <img  src={assest.appstore}/>
            </div>

    </div>

}
export default Mobileapp;