function Header(){
    return <div className="flex justify-center items-center mt-40 flex-wrap  ">
        <div className="">
            <h1 className="text-6xl font-bold w-250 text-blue-600">ORDER OUR SPORTS PRODUCTS FROM TOP QUALITY BRANDS THAT MAKES YOU FIT AND HEALTHY  </h1>
            <p className="text-4xl w-250 font-semibold text-gray-600 uppercase">From basketballs to footballs and everything . find top-quality gear that keeps your game strong.</p>
            
            <div className="mt-5">
            <button className= " font-bold bg-yellow-600 p-4 rounded-4xl text-3xl text-white hover:bg-yellow-800">ORDER-NOW</button>
            </div>


        </div>
        <div className="mt-5">
            <img  className="w-100" src="public/download (5).jpg" alt="hero-section-image"/>
            
        </div>

    </div>

}
export default Header;