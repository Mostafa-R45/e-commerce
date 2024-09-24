import { createContext, useState } from 'react';
import allProducts from '../Assets/all_product.js';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  allProducts.all_product.forEach(product => {
    cart[product.id] = 0; // استخدام id كـمفتاح
  });
  return cart;
}

const ShopProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const { all_productMen, all_productKids, all_product } = allProducts;

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  }

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
  }

  return (
    <ShopContext.Provider value={{ all_productMen, all_productKids, all_product, cartItem, addToCart, removeFromCart, getTotalCartItems }}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopProvider;
