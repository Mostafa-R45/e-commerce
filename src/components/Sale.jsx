import sale from '../Assets/boy.png';
import Button from './Button'
const Sale = () => {
    return (
        <div className="flex justify-center rounded-lg gap-4 h-[100vh] items-center my-20">
            <div className="flex flex-1 w-[80%] bg-black max-md:hidden items-center justify-center">
                <img src={sale} className='object-cover max-w-[75%] h-auto' alt="sale" />
            </div>
            <div className='w-full flex flex-1 items-center'>
                <div className='flex-1'>
                    <h1 className='text-8xl'>Don't <br/> Miss Our</h1>
                    <div className='w-full flex-1 justify-end pr-0 max-md:pr-0'>
                        <h1 className="w-full flex-end text-4xl font-extrabold">
                            <span className='text-8xl max-lg:text-6xl'> discounts! </span>
                        </h1>
                    </div>
                    <h1 className="w-full text-4xl font-bold mb-6">
                        Enjoy up to <br/><span className='text-8xl font-extrabold'> 50% </span><br/> off on selected
                    </h1>
                    <div className='ml-10'>
                    <Button label="See More"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sale;
