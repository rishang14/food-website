import React from 'react'; 
import {Routes,Route} from "react-router-dom" 
import MyAccount from './MyAccount';  
import TopNav from './TopNav';
import Home from './Home'; 
import DeliveryDeatils from './DeliveryDeatils'; 
import SignIn from '../Authentication/SignIn';
import SignUp from '../Authentication/SignUp';

const CustomRoutes = () => {
  return (
   <>
    <Routes>   
      <Route path='/' element={<TopNav/>}>
        <Route index element={<Home/>}/>
        <Route path='myaccount' element={<MyAccount/>}/> 
        <Route path='mydelivery' element={<DeliveryDeatils/>}/> 
      </Route>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>

    </Routes>
   </>
  )
}

export default CustomRoutes