import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Cart from './pages/cart.jsx';
import Placeorder from './pages/placeorder.jsx';
import Header from './components/header.jsx';
import Exploreproduct from './components/exploreproduct.jsx';
import Home from './components/home.jsx';
import Mobileapp from './components/mobileapp.jsx';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        index:true,
        element:(
          <>
          <Header/>
          <Exploreproduct/>
          <Home/>
          <Mobileapp/>
          </>
        )
      },
      
      {
        path:"cart",
        element:<Cart/>

      },
      {
        path:"placeorder",
        element:<Placeorder/>
      }
    ]

  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
