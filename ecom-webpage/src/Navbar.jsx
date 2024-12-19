import Logo from './assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Herosection from './Herosection';
import Collection from './Collection';
import About from './About';
import Footer from './Footer';
import BestSelling from './BestSelling';
import { useState } from 'react';

export default function Navbar() {
    const [sidebar, setSideBar] = useState(false);

    function sidebarHandler() {
        setSideBar(!sidebar);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        <div className='sticky top-0 bg-white z-50'> 
            <div className="flex justify-between items-center p-4 ">
                <div className="pl-12 pt-2">
                    <img src={Logo} alt="Logo" />
                </div>

                <ul className="hidden lg:flex m-4 text-md font-medium relative text-black">
                    <li className="pl-8 hover:text-blue-700 hover:cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
                    <li className="pl-8 hover:text-blue-700 hover:cursor-pointer" onClick={() => scrollToSection('collection')}>Collection</li>
                    <li className="pl-8 hover:text-blue-700 hover:cursor-pointer">New Arrival</li>
                    <li className="pl-8 hover:text-blue-700 hover:cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
                    <li className="pl-8 hover:text-blue-700 hover:cursor-pointer" onClick={() => scrollToSection('offer')}>Offer</li>
                </ul>

                <div className="hidden lg:flex m-4 cursor-pointer">
                    <SearchIcon sx={{ marginLeft: '16px', fontSize: '1.5rem' }} />
                    <PersonIcon sx={{ marginLeft: '16px', fontSize: '1.5rem' }} />
                    <LocalMallIcon sx={{ marginLeft: '16px', fontSize: '1.5rem' }} />
                </div>

                <div className={`lg:hidden m-4 ${sidebar ? 'hidden' : ''}`}>
                    <MenuIcon onClick={sidebarHandler} />
                </div>
            </div>

            <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 lg:hidden transition-transform transform ${sidebar ? 'translate-x-0' : '-translate-x-full'}`} style={{ zIndex: 100 }}>
                <div className='hover:text-red-500'>
                    <CloseIcon onClick={sidebarHandler} sx={{ float: "right", margin: "30px" }} />
                </div>
                <div className="w-64 h-full bg-gray-900 text-white p-4">
                    <ul className="flex flex-col space-y-4 overflow-y-auto">
                        <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
                        <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer" onClick={() => scrollToSection('collection')}>Collection</li>
                        <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer" >New Arrivals</li>
                        <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
                        <li className="hover:bg-gray-700 py-2 px-4 cursor-pointer" onClick={() => scrollToSection('offer')}>Offer</li>
                    </ul>
                </div>
            </div>
            <div className='border-b-gray-300 border-[0.5px] mr-5 ml-5'></div>
          </div>
            <div id="home" className="">
                <Herosection />
            </div>

            <BestSelling />
            <div id="collection" className="md:min-h-screen">
                <Collection />
            </div>
            <div id="about" className="md:min-h-screen">
                <About />
            </div>
            <div id="offer" className="">
                <Footer />
            </div>
        </>
    );
}
