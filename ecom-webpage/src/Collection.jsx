import Products from './Products';
import product from './assets/p_img52.png';
import product2 from './assets/p_img13.png';
import product3 from './assets/p_img11.png';
import product4 from './assets/p_img46.png';
import product5 from './assets/p_img51.png';
import product6 from './assets/p_img28.png';
import About from './About';
export default function Collection(){
    
    

    return(
        <>
            <div>
                 <div className='overflow-x-hidden md:mt-36'>
                     <h1 className="text-4xl font-bold text-center font-mono">Latest <span className="text-gray-400">Collection</span></h1>
                     <p className="text-center mt-4 ">Want inspiration? Visit The Style Room for styling tips and fashion trends.</p>
                 </div>

                 <div className='grid justify-center items-center lg:grid-cols-3 sm:grid-cols-2 sm:m-8 md-12'>
                 
                 <Products src ={product} rate ={2.5}/>
                 <Products src ={product2} rate ={3.5}/>
                 <Products src ={product3} rate ={4.5}/>
                 <Products src ={product4} rate ={1.5}/>
                 <Products src ={product5} rate ={4.9}/>
                 <Products src ={product6} rate ={2.5}/>
                 
                 </div>
            </div>
        </>
    )
}