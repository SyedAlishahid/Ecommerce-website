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
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [sidebar, setSideBar] = useState(false);
    const location = useLocation();

    function sidebarHandler() {
        setSideBar(!sidebar);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Scroll automatically to the section based on the URL path
    useEffect(() => {
        const pathMap = {
            '/about': 'about',
            '/collection': 'collection',
            '/offer': 'offer',
            '/': 'home',
        };
        const sectionId = pathMap[location.pathname];
        if (sectionId) {
            scrollToSection(sectionId);
        }
    }, [location]);

    return (
        <>
            <div className='sticky top-0 bg-white shadow-md z-50'>
                <div className="flex justify-between items-center p-4">
                    <div className="cursor-pointer">
                        <img src={Logo} alt="Logo" onClick={() => window.location.href = "http://localhost:5173/"} />
                    </div>

                    <ul className="hidden lg:flex space-x-8 text-md font-medium text-black">
                        {['/', '/collection', '/arrivals', '/about', '/offer'].map((path, index) => (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `hover:text-blue-700 ${isActive ? 'text-blue-700 font-bold' : 'font-medium'}`
                                    }
                                >
                                    {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex space-x-4">
                        <SearchIcon sx={{ fontSize: '1.5rem' }} />
                        <PersonIcon sx={{ fontSize: '1.5rem' }} />
                        <LocalMallIcon sx={{ fontSize: '1.5rem' }} />
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
                            {['/', '/collection', '/arrivals', '/about', '/offer'].map((path, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            `hover:bg-gray-700 py-2 px-4 cursor-pointer ${isActive ? 'text-blue-700 font-bold' : ''}`
                                        }
                                    >
                                        {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='border-b border-gray-300'></div>
            </div>
            <div id="home">
                <Herosection />
            </div>

            <BestSelling />
            <div id="collection" className="md:min-h-screen">
                <Collection />
            </div>
            <div id="about" className="md:min-h-screen">
                <About />
            </div>
            <div id="offer">
                <Footer />
            </div>
        </>
    );
}
