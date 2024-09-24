import { useContext } from "react";
import SaleTop from "../components/saleTop";
import { ShopContext } from '../Context/ShopContext';  
import { Link } from "react-router-dom";
const Type = ({ type,id }) => {
  const { all_productMen, all_productKids } = useContext(ShopContext);

  return (
    <section>
      <SaleTop label={type} />

      {type === "men" ? (
        <>
        
          <div className="max-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-20">
              {all_productMen && all_productMen.length > 0 ? (
                all_productMen.map((product) => (
                  <Link to={`/product/${product.id}`} className="hover:scale-105 ease-in-out cursor-pointer duration-1000 hover:shadow-xl rounded-lg" key={product.id}>
                    <img
                      src={product.image}
                      className="hover:rounded-t-xl  w-full object-cover ease-in-out duration-500 filter grayscale hover:grayscale-0"
                      alt={product.name}
                    />
                    <div className="p-4">
                      <h3>{product.name}</h3>
                      <p className="line-through text-red-600">{product.old_price}$</p>
                      <p className="text-green-600">{product.new_price}$</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-red-600 font-bold">No products available for men!</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="max-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-20">
            {all_productKids && all_productKids.length > 0 ? (
              all_productKids.map((product) => (
                <Link to={`/product/${product.id}`}  key={product.id} className="hover:scale-105 ease-in-out duration-1000 hover:shadow-2xl cursor-pointer">
                  <img
                    src={product.image}
                    className="w-full object-cover ease-in-out duration-500"
                    alt={product.name}
                  />
                  <div className="p-4">
                    <h3>{product.name}</h3>
                    <p className="line-through text-red-600">{product.old_price}$</p>
                    <p className="text-green-600">{product.new_price}$</p>
                  </div>
                </Link>
                
              ))
            ) : (
              <p>No products available for kids.</p>
            )}
          </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Type;
