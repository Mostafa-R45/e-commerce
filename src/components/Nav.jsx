import logo from "../Assets/image.png";
import { useContext, useState } from 'react';

import { NavLink,Link } from "react-router-dom";
import Button from "./Button";
import { ShopContext } from "../Context/ShopContext";
const Nav = () => {
    const [isNavOpen, setisNavOpen] = useState(false);
    const navHandler = ()=>{
        setisNavOpen(!isNavOpen);
    }
   const {getTotalCartItems} = useContext(ShopContext);
  return (
    <header className="border-b-2 border-gray-200 ">
 <div className="max-container flex justify-between items-center">
 <nav>
   <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" width={80} />
        <h3 className="text-2xl font-extrabold ">Error</h3>
    </Link>
    </nav>
    <nav className="flex justify-center gap-8 max-lg:hidden">
<NavLink
  to="/"
  className={({ isActive }) => isActive ? 'font-extrabold     text-2xl text-black' : 'font-extrabold text-xl text-[#00000090]'}>Shop</NavLink>
<NavLink
  to="/Men"
  className={({ isActive }) => isActive ? 'font-extrabold text-2xl text-black' : 'font-extrabold text-xl text-[#00000090]'}>Men</NavLink>
  <NavLink
  to="/Kids"
  className={({ isActive }) => isActive ? 'font-extrabold text-2xl text-black' : 'font-extrabold text-xl text-[#00000090]'}>Kids</NavLink>
    </nav>
    <nav className="flex  items-center gap-4 max-lg:hidden">
   <div className="relative">
   <Link to="cart" style={{fontSize:"24px",cursor:"pointer"}} className="fa-solid fa-cart-shopping flex items-center"></Link>
   <div className="absolute top-[-8px] right-[-8px] w-[15px] h-[15px] bg-red-700  z-10 rounded-full text-[10px] text-center text-white" >{getTotalCartItems()}</div>
   </div>

    
    </nav>
    <nav className="lg:hidden">
    <i style={{fontSize:"24px", cursor:"pointer"}} className="fa-solid fa-bars" onClick={()=>{navHandler()}}></i>
    </nav>
 </div>

{
    isNavOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50">
          <nav className="flex flex-col h-full py-20">
            <Link
              to="/"
              className='font-extrabold text-blackfont-extrabold border-t-[1px] border-b-[1px] p-4  border-gray-200  hover:bg-gray-200 transition-colors'
            >
              Shop
            </Link>
            <Link
              to="/Men"
              className='font-extrabold text-blackfont-extrabold   border-b-[1px] p-4  border-gray-200  hover:bg-gray-200 transition-colors'
            >
              Men
            </Link>
            <Link
              to="/Kids"
              className='font-extrabold text-blackfont-extrabol   border-b-[1px] p-4  border-gray-200  hover:bg-gray-200 transition-colors'
              >
              Kids
            </Link>
            <nav className="flex  items-center gap-4 justify-between   p-4  absolute bottom-4 left-0 w-full">
   <div className="relative">
   <Link to="cart" style={{fontSize:"24px",cursor:"pointer"}} className="fa-solid fa-cart-shopping flex items-center"></Link>
   <div  className="absolute top-[-8px] right-[-8px] w-[15px] h-[15px] bg-red-700  z-10 rounded-full text-[10px] text-center text-white" >{getTotalCartItems()}</div>
   </div>

    
    </nav>
          </nav>
         <div className="absolute top-0 right-4 w-[85%] flex justify-between">
         <img src={logo} alt="logo" width={80} />
         <i style={{ fontSize:"24px",paddingTop:"15px",cursor:"pointer"}} onClick={()=>{navHandler()}} className="fa-solid fa-circle-xmark"></i>
         </div>
        </div>
    )
}
       

    </header>
  )
}

export default Nav