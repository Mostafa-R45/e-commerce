import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Productdisplay from '../components/Productdisplay';
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <>
      <Productdisplay product={product}/>
    </>
  );
};

export default Product;
