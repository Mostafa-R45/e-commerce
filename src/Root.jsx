import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ShopProvider from './Context/ShopContext';
export default function Root() {
  console.log('Root component rendered');
  return (
    <div>
    <ShopProvider>
      <Nav />
      <Outlet />
      <Footer/>
    </ShopProvider>
    </div>
  );
}
