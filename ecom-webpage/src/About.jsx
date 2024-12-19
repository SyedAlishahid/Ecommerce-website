import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import aboutsec from './assets/2.png'
export default function about() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 text-center items-center mt-16 object-cover overflow-x-hidden p-4'>
                <div className='md:mb-18'>
                    <h3 className=' mb-8 text-slate-800 font-bold text-3xl '><HorizontalRuleIcon />Why Choose Us!</h3>
                    <img src={aboutsec} className='rounded-lg lg:h-[35rem] lg:pl-10' />
                </div>
                <div className='lg:mb-36'>
                    <h1 className='text-slate-600 font-semibold md:mt-10 text-2xl'><HorizontalRuleIcon />About Us</h1>
                    <p className=' pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, officiis dolores dolorum repudiandae illum earum! Modi consequatur dignissimosDolore corporis eaque non ullam nihil quos quasi at quisquam, corrupti ex assumenda, optio animi! Fugiat aperiam ut sint natus aliquam cumque maxime. Ipsa, corporis repellat ratione quaerat
                        tempora quasi. id, explicabo voluptatem aliquam sint aperiam nulla reiciendis, sunt adipisci animi recusandae.
                        Delectus, quas corporis eius atque illo esse saepe minus maxime deleniti reprehenderit sunt corrupti exercitationem neque.</p>
                    <h1 className='p-4 text-slate-600 font-semibold text-2xl'>Our Mission<HorizontalRuleIcon /></h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, error quidem officiis eum expedita quia aut eaque at sed sint officia sapiente dolorum molestias accusamus rem cupiditate quisquam aliquam tempore.
                        Quam fuga fugit, enim suscipit deleniti vitae molestias! Magnam fugit enim, aspernatur delectus nam tempore modi minima, at esse aut quisquam voluptates, voluptate laborum repudiandae quasi quia odit. Nesciunt, error?
                    </p>
                </div>
            </div>
        </>
    )
}