import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Navbar from './components/navbar'
import { Gives } from './store/context'
import { Helper } from './store/context'
import { useContext } from 'react'
import Loginpop from './components/loginpopup'
import Header from './components/header'
import Exploreproduct from './components/exploreproduct'
import Home from './components/home'
import Mobileapp from './components/mobileapp'
import Footer from './components/footer'
function Inner(){
  const {login}=useContext(Helper);
  return <div>
    <Navbar/>
    {login?<Loginpop/>:<></>}
    <Header/>
    <Exploreproduct/>
    <Home/>
    <Mobileapp/>
    <Footer/>
    </div>
    

}
function App() {
  
    return <Gives>
      <Inner/>
    </Gives>
  
  
}

export default App
