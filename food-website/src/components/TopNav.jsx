import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose ,AiOutlineLogin,} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";    
import {Link,Outlet} from "react-router-dom";



const TopNav = () => {
  const [sideNav, setsideNav] = useState(false); 
  const [isloggedIn,setIsLoggedIn]=useState(false)
  return ( 
    <>
  
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setsideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 cursor-pointer">
        <Link to={"/"} > Yum<span className="font-bold">Eats</span > </Link>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold">
            Free
          </p>
          <p className="p-2 text-bold">Delievery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          className="bg-transparent p-2 w-full focus:outline-none"
          placeholder="search meal"
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex items-center pu-2 rounded-full ">
        <BsFillCartFill />
        Cart
      </button>
      {sideNav ? (
        <div
          className="bg-black/60  fixed w-full h-screen z-10 top-0 left-0 "
          onClick={() => setsideNav(!sideNav)}
        />
      ) : (
        ""
      )}
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen  bg-white z-10 duration-200"
            : "fixed top-0 left-[-300%] w-[300px] h-screen  bg-white z-10 duration-200"
        }
      >
        <AiOutlineClose
          className="right-3 absolute top-3 cursor-pointer"
          size={25}
          onClick={() => setsideNav(!sideNav)}
        />
        <h2 className="text-2xl p-4 cursor-pointer">
          {" "}
        <Link to={"/"}  onClick={() => setsideNav(!sideNav)}> Yum <span className="text-orange-700  font-bold">Eats</span> </Link>  
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl p-4 flex">
              <BsPerson
                size={25}
                className="mr-4 text-white  bg-black rounded-full cursor-pointer" 
                
              />
            <Link to={"/myaccount"}  onClick={() => setsideNav(!sideNav)}> My Account</Link>
            </li>
            <li className=" text-xl p-4 flex">
              <TbTruckReturn
                size={25}
                className="mr-4 text-white  bg-black rounded-full cursor-pointer"
              />
            <Link to={"/mydelivery"}  onClick={() => setsideNav(!sideNav)}>Delievry</Link>
            </li>
            <li className=" text-xl p-4 flex">
              <MdOutlineFavorite
                size={25}
                className="mr-4 text-white  bg-black rounded-full"
              />
              My Favourite
            </li>
            <li className=" text-xl p-4 flex">
              <FaGoogleWallet
                size={25}
                className="mr-4 text-white  bg-black rounded-full"
              />
              Wallet
            </li>
            <li className=" text-xl p-4 flex">
              <MdHelp
                size={25}
                className="mr-4 text-white  bg-black rounded-full"
              />
              Help
            </li>
          </ul>
        <Link to={"/SignIn"} className="absolute bottom-10 left-[30%] bg-gray-200 rounded-2xl p-3 text-[14px] text-orange-700"> <AiOutlineLogin size={25} className="cursor-pointer"/>SignIn</Link>
        <Link to={"/SignUp"} className="absolute bottom-10 right-[20%] bg-gray-200 rounded-2xl p-3 text-[14px] text-orange-700"> <AiOutlineLogin size={25} className="cursor-pointer"/>SignUp</Link>
        </nav> 
      </div> 
     
    </div>  
    <Outlet/>
    </>
  );
};

export default TopNav;
