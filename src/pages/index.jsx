import { useState, useEffect } from 'react';
import boy from '../Assets/rem-poy.png';
import Button from '../components/Button';
import Populer from '../components/Populer';
import Sale from '../components/Sale';
import ContactUs from '../components/contactUs';
import About from '../components/About';

const Index = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='max-container flex justify-between max-md:flex-col'>
        <div className='max-md:text-center'>
          <h1 className='uppercase text-8xl font-bold mt-24 max-md:text-7xl'>Welcome</h1>
          <span className='text-4xl font-extrabold'>In</span>
          <span className='font-fredericka text-8xl font-bold'>Error</span>
          <p className='font-bold text-6xl'>Shop</p>
          <p className='py-8 max-w-[400px] m-auto font-fredericka text-lg font-bold'>
            Discover your elegance with us! Browse the latest fashion collections that suit all tastes and occasions.
          </p>
          <Button label="Latest Offers" />
        </div>
        <img src={boy} className='filter grayscale object-contain m-auto max-lg:w-[330px]' width={470} alt="boy" />
      </div>

      <Populer />
      <Sale />
      <About />
      <ContactUs />

      {showScroll && (
        <div
          className='w-10 h-10 bg-black rounded-full fixed bottom-5 right-5 text-center flex items-center text-white justify-center cursor-pointer'
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <i className="fa-solid fa-arrow-turn-up" style={{ fontWeight: '900' }}></i>
        </div>
      )}
    </>
  );
};

export default Index;
