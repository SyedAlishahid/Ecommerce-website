import heroimg from './assets/hero_img.png'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
export default function Herosection(){

    return(
        <>
       <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='flex flex-col ml-12 mt-12 md:ml-36 md:mt-28 lg:mt-48'>
                <p className='font-semibold font-sans '><HorizontalRuleIcon /> OUR BESTSELLERS</p>
                    <h1 className='mt-2 text-5xl font-bold font-serif'>Lastest Arrivals</h1>
                    <p className='font-semibold font-sans mt-4'> SHOP NOW<HorizontalRuleIcon /></p>
                    </div>
            <div className='md:mr-5 '>
                <img src={heroimg} alt="" className='bg-cover cursor-not-allowed' />
            </div>
      </div>
        </>
    )
}