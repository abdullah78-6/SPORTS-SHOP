import { assest } from "../assets/assests";

function Mobileapp(){
    return <div className="mt-3" id="app">
        <div>
            <h1 className="text-center text-lm md:text-4xl lg:text-4xl font-bold text-gray-600">GET OUR APP FROM PLAY-STORE AND  APP-STORE</h1>
            

        </div>
        <div className="flex justify-center items-center flex-wrap gap-6 mt-5">
        <img className="w-40 md:w-40 lg:w-70 xl:w-80" src={assest.playstore}/>
            <img className="w-40 md:w-40 lg:w-70 xl:w-80" src={assest.appstore}/>
            </div>

    </div>

}
export default Mobileapp;