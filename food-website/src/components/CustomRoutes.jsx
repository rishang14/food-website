import React from 'react'; 
import {Routes,Route} from "react-router-dom" 
import MyAccount from './MyAccount';  
import TopNav from './TopNav';
import Home from './Home'; 
import DeliveryDeatils from './DeliveryDeatils';

const CustomRoutes = () => {
  return (
   <>
    <Routes>   
      <Route path='/' element={<TopNav/>}>
        <Route index element={<Home/>}/>
        <Route path='myaccount' element={<MyAccount/>}/> 
        <Route path='mydelivery' element={<DeliveryDeatils/>}/> 
      </Route>


    </Routes>
   </>
  )
}

export default CustomRoutes