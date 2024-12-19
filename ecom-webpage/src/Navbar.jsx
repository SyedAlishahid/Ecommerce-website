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
        if (location.pathname === '/about') {
            scrollToSection('about');
        } else if (location.pathname === '/collection') {
            scrollToSection('collection');
        } else if (location.pathname === '/offer') {
            scrollToSection('offer');
        } else if (location.pathname === '/') {
            scrollToSection('home');
        }
    }, [location]);

    return (
        <>
            <div className='sticky top-0 bg-white z-50'>
                <div className="flex justify-between items-center p-4 ">
                    <div className="pl-12 pt-2">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <ul className="hidden lg:flex m-4 text-md font-medium relative text-black">
                        <li className="pl-8">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `hover:text-blue-700 hover:cursor-pointer ${isActive ? 'text-blue-700 font-bold' : 'font-medium text-black'}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="pl-8">
                            <NavLink
                                to="/collection"
                                className={({ isActive }) =>
                                    `hover:text-blue-700 hover:cursor-pointer ${isActive ? 'text-blue-700 font-bold' : 'font-medium text-black'}`
                                }
                            >
                                Collection
                            </NavLink>
                        </li>
                        <li className="pl-8">
                            <NavLink
                                to="/arrivals"
                                className={({ isActive }) =>
                                    `hover:text-blue-700 hover:cursor-pointer ${isActive ? 'text-blue-700 font-bold' : 'font-medium text-black'}`
                                }
                            >
                                Arrivals
                            </NavLink>
                        </li>
                        <li className="pl-8">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `hover:text-blue-700 hover:cursor-pointer ${isActive ? 'text-blue-700 font-bold' : 'font-medium text-black'}`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="pl-8">
                            <NavLink
                                to="/offer"
                                className={({ isActive }) =>
                                    `hover:text-blue-700 hover:cursor-pointer ${isActive ? 'text-blue-700 font-bold' : 'font-medium text-black'}`
                                }
                            >
                                Offer
                            </NavLink>
                        </li>
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
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `hover:bg-gray-700 py-2 px-4 cursor-pointer ${isActive ? 'text-blue-700 font-bold' : ''}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/collection"
                                    className={({ isActive }) =>
                                        `hover:bg-gray-700 py-2 px-4 cursor-pointer ${isActive ? 'text-blue-700 font-bold' : ''}`
                                    }
                                >
                                    Collection
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/arrivals"
                                    className={({ isActive }) =>
                                        `hover:bg-gray-700 py-2 px-4 cursor-pointer ${isActive ? 'text-blue-700 font-bold' : ''}`
                                    }
                                >
                                    Arrivals
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `hover:bg-gray-700 py-2 px-4 cursor-pointer ${isActive ? 'text-blue-700 font-bold' : ''}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/offer"
                                    className={({ isActive }) =>
                                        `hover:bg-gray-700 py-2 px-4 cursor-pointer ${isActive ? 'text-blue-700 font-bold' : ''}`
                                    }
                                >
                                    Offer
                                </NavLink>
                            </li>
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
