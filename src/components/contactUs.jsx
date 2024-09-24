const ContactUs = () => {
  return (
    <section className=' max-container flex flex-row gap-12 max-lg:flex-col mb-10'>
    <div className='flex flex-1 flex-col'>
  <div className="mb-10">      
        <div className='flex-1'>
        <h1 className='text-xl font-bold'>Contact Us</h1>
        <h1 className='text-4xl font-extrabold'>Hello, Darling</h1>
        <p>Give us a send note,<br/> We will be happy to answer yout question</p>
        </div>
        <div className='flex-1 flex items-center gap-8 mt-5'>
        <i style={{fontSize:'24px',border:"2px solid black", padding:'10px 13px',borderRadius:"30px"}}  className="fa-solid fa-mobile-screen-button"></i>
        <div>
            <p className='text-2xl font-bold'>Contact</p>
            <a className='font-bold'>Error@gmail.com</a>
            <p>+964 783 394 4620</p>
        </div>
        </div>
        <div className='flex-1 flex gap-4 items-center mt-8'>
        <i style={{fontSize:'24px',border:"2px solid black", padding:'10px 12px',borderRadius:"30px"}} className="fa-brands fa-instagram"></i>
  <div>
  <p className='text-xl font-bold'>instagram</p>
  <a href='https://www.instagram.com/mostafa_offline_99' className='font-bold'>Open</a>
  </div>
        </div>
        </div>
    </div>
        <div className='flex-1 mb-10'>
            <p className='text-2xl font-bold'>Send A Email</p>
            <form className='flex flex-col'>
            <label className="pt-2 font-bold text-sm" htmlFor='yourname'>Your Name</label>
                <input  className="border-[1px] mt-2 border-black rounded-lg p-2" type='text' id="yourname"/>
            <label className="pt-2 font-bold text-sm" htmlFor='email'>Email</label>
                <input className="border-[1px] mt-2 border-black rounded-lg p-2" type="text" id="email"/>
            <label  className="pt-2 font-bold text-sm"htmlFor='ques'>Question</label>
                <textarea  className="border-[1px] mt-2 border-black rounded-lg p-2" id="ques"/>
                <input className='bg-black text-white mt-5 p-2 rounded-full font-bold cursor-pointer' type="submit"/>
            </form>
        </div>
    </section>
  )
}

export default ContactUs