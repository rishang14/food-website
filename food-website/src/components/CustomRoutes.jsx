import React from 'react'; 
import {Routes,Route} from "react-router-dom" 
import MyAccount from './MyAccount'; 
import Home from './Home'; 
import DeliveryDeatils from './DeliveryDeatils';

const CustomRoutes = () => {
  return (
   <>
    <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/myaccount' element={<MyAccount/>}/> 
        <Route path='/mydelivery' element={<DeliveryDeatils/>}/> 


    </Routes>
   </>
  )
}

export default CustomRoutes