import React from 'react'
import logo from "../Assets/image.png";

const Footer = () => {
  return (
    <section className=' max-container flex flex-col justify-center'>
    <div className='mt-10 flex justify-center items-center text-2xl font-extrabold border-b-2'>
    <img src={logo} alt="logo" width={80} />
    <p>Error</p>
    </div>
    <p className=' text-xl font-extrabold text-center py-5'>Copyright @ 2024 - All Right Reserved</p>
    </section>
  )
}

export default Footer