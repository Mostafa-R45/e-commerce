import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const CartItems = () => {
  const { all_product, cartItem, removeFromCart } = useContext(ShopContext);

  const hasItems = all_product.some(e => cartItem[e.id] > 0);
  const subtotal = all_product.reduce((total, product) => {
    if (cartItem[product.id] > 0) {
      return total + (product.new_price * cartItem[product.id]);
    }
    return total;
  }, 0);

  const shipping = 0; 
  const total = subtotal + shipping;

  return (
    <div className='max-container p-4 min-h-[65vh]'>
      {hasItems ? (
        <>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-gray-200 border-b'>
                <th className='p-2 text-left'>Product</th>
                <th className='p-2 text-left'>Title</th>
                <th className='p-2 text-left'>Price</th>
                <th className='p-2 text-left'>Quantity</th>
                <th className='p-2 text-left'>Total</th>
                <th className='p-2 text-left'>Remove</th>
              </tr>
            </thead>
            <tbody>
              {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                  return (
                    <tr key={e.id} className='border-b'>
                      <td className='p-2'>
                        <img width={100} src={e.image} alt={e.name} className='object-cover' />
                      </td>
                      <td className='p-2'>{e.name}</td>
                      <td className='p-2'>{e.new_price}$</td>
                      <td className='p-2 text-center'>{cartItem[e.id]}</td>
                      <td className='p-2'>{e.new_price * cartItem[e.id]}$</td>
                      <td className='p-2 text-center'>
                        <i 
                          onClick={() => removeFromCart(e.id)} 
                          style={{ color: 'red' }}
                          className="fa-solid fa-trash-can cursor-pointer"
                        ></i>
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          <div className='flex mt-20 gap-14  max-lg:flex-col-reverse'>
            <div className='w-full flex-1'>
              <h1 className='font-bold text-4xl'>Cart Totals</h1>
              <div className='flex justify-between border-b-2 pb-2 mt-4 border-black'>
                <p>Subtotal</p>
                <p className='mr-4'>{subtotal}$</p>
              </div>
              <div className='flex justify-between border-b-2 mt-4 pb-2 border-black'>
                <p>Shopping Fee</p>
                <p className='mr-4'>Free</p>
              </div>
              <div className='flex justify-between border-b-2 mt-4 pb-2 border-black'>
                <p>Total</p>
                <p className='mr-4'>{total}$</p>
              </div>
              <button className='w-[150px] p-2 rounded-full mt-4 bg-black text-white font-bold hover:bg-white hover:text-black border-black border-2 ease-linear duration-500'>
                Pay
              </button>
            </div>
            <div className='w-full flex-1 justify-between '>
              <h1 className='text-xl font-bold mb-8'>If you have a promo code, enter it here:</h1>
              <div className='mt-2 relative'>
                <input placeholder='Code' type='text' className='border w-full h-12 p-4 pr-[100px] border-gray-300 rounded-full'/>
                <button className='p-2 bg-black text-white rounded-full absolute right-2 top-1 px-4'>Submit</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className='text-4xl text-red-600 text-center mt-44'>There are no products in the cart...</p>
      )}
    </div>
  );
}

export default CartItems;
