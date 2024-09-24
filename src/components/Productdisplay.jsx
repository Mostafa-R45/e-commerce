  import React, { useContext } from 'react'
  
import About from './About';
import Populer from './Populer';
import { ShopContext } from '../Context/ShopContext';
  const Productdisplay = (props) => {
    const product = props.product;
    const {addToCart} = useContext(ShopContext)
    return (
      <>
      <div className='w-[100%] max-container flex max-md:flex-col '>

<div className='flex h-[400px] gap-6 flex-1 w-[100%] max-md:flex-col max-md:justify-center mt-10 '>
  <img className='h-full min-w-[250px] object-cover' src={product.image} alt="Product Main" />
  <div className='flex flex-col h-[400px] justify-between overflow-hidden max-md:flex-row max-md:h-auto max-md:gap-4'>
    <img className='h-1/5 object-cover min-w-[80px] max-md:h-[100px]' src={product.image} alt="Product 1" />
    <img className='h-1/5 object-cover min-w-[80px] max-md:h-[100px]' src={product.image} alt="Product 2" />
    <img className='h-1/5 object-cover min-w-[80px] max-md:h-[100px]' src={product.image} alt="Product 3" />
    <img className='h-1/5 object-cover min-w-[80px] max-md:h-[100px]' src={product.image} alt="Product 4" />
  </div>
</div>


        <div className='flex-1 mt-10 lg:ml-10'>
          <h1 className='text-2xl font-bold'>{product.name}</h1>
          <div className='flex gap-2 items-center mt-10'>
  <div className=''>
  <i style={{fontSize:"24px", color:"orange"}} className="fa-solid fa-star"></i>
          <i style={{fontSize:"24px", color:"orange"}} className="fa-solid fa-star"></i>
          <i style={{fontSize:"24px", color:"orange"}} className="fa-solid fa-star"></i>  
          <i style={{fontSize:"24px", color:"orange"}} className="fa-solid fa-star"></i>
          <i style={{fontSize:"24px", color:"#ffa50061"}} className="fa-solid fa-star"></i>
  </div>
          <p>(+122)</p>
          </div>
        <div className='mb-4 flex gap-5'>
        <p className= 'text-xl text-red-600 mt-2 line-through'>{product.old_price}$</p>
        <p className= 'text-xl text-green-600 mt-2'>{product.new_price}$</p>
        </div>
        <p className='font-bold'>select Size:</p>
        <div className='w-full flex gap-4 my-4'>
        <span className='w-[50px] h-[45px] p-2 text-center font-bold border-2 border-transparent rounded-md cursor-pointer  hover:bg-black hover:text-white ease-linear duration-700'>
           {product.category === "men" ? ("S") : ("1")} 
          </span>
          <span className='w-[50px] h-[45px] p-2 text-center font-bold border-2 border-transparent rounded-md cursor-pointer  hover:bg-black hover:text-white ease-linear duration-700'>
           {product.category === "men" ? ("M") : ("2")} 
        
          </span>
          <span className='w-[50px] h-[45px] p-2 text-center font-bold border-2 border-transparent rounded-md cursor-pointer  hover:bg-black hover:text-white ease-linear duration-700'>
           {product.category === "men" ? ("L") : ("3")} 
        
          </span>
          <span className='w-[50px] h-[45px] p-2 text-center font-bold border-2 border-transparent rounded-md cursor-pointer  hover:bg-black hover:text-white ease-linear duration-700'>
           {product.category === "men" ? ("XL") : ("4")} 
          
          </span>
          <span className='w-[50px] h-[45px] p-2 text-center font-bold border-2 border-transparent rounded-md cursor-pointer  hover:bg-black hover:text-white ease-linear duration-700'>
           {product.category === "men" ? ("XXL") : ("5")} 
            
          </span>
        </div>
  <button onClick={()=>{addToCart(product.id)}} className='border-2 border-black bg-white p-2 w-full rounded-full hover:bg-black hover:text-white ease-linear duration-700'>Add to card</button>
        </div>
      </div>
      <About/>
      <Populer/>
      </>
    )
  }

  export default Productdisplay
