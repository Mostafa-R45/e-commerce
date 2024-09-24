import data_product from "../Assets/data"
import Item from './item'
const Populer = () => {
  return (
  <div className="max-container">
   <h1 className='w-full border-b-2 pb-4 border-gray-200 text-center text-4xl font-bold mt-10'>Populer In our Store</h1>
   <div className="grid sm:w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6   mb-20">
        {data_product.map((item )=>{
            return(
                <Item key={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)
            
        })
        
        }
    </div>
    </div> 
  )
}

export default Populer