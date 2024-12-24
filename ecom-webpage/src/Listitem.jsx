import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import logo from './assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Listimgs from './Listimgs';
import img20 from './assets/p_img20.png';
import img21 from './assets/p_img21.png';
import img22 from './assets/p_img22.png';
import img23 from './assets/p_img23.png';
import img24 from './assets/p_img24.png';
import img25 from './assets/p_img25.png';
import img26 from './assets/p_img26.png';
import img27 from './assets/p_img27.png';
import img28 from './assets/p_img28.png';
import img29 from './assets/p_img29.png';
import img30 from './assets/p_img30.png';
import img31 from './assets/p_img31.png';
import img32 from './assets/p_img32.png';
import img33 from './assets/p_img33.png';
import img34 from './assets/p_img34.png';
import img35 from './assets/p_img35.png';
import img36 from './assets/p_img36.png';
import img37 from './assets/p_img37.png';
import img38 from './assets/p_img38.png';
import img39 from './assets/p_img39.png';
import img40 from './assets/p_img40.png';
import Cart from './Cart';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

function Listitem() {
  const [filters, setFilters] = useState({
    isChecked: false,
    womenChecked: false,
    unisex: true,
    premium: false,
    stylish: false,
    casual: false,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isInputVisible, setInputVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false); 

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSearchInput = () => {
    setInputVisible(!isInputVisible);
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const constantPrice = (Math.random() * 100).toFixed(2);
  const items = [
    { src: img20, type: "Men Premium Quality", price: "48.93$" },
    { src: img21, type: "Women Stylish Wear", price: constantPrice },
    { src: img22, type: "Men Casual Collection", price: constantPrice },
    { src: img23, type: "Women Trendy Collection", price: constantPrice },
    { src: img24, type: "Women Summer Styles", price: constantPrice },
    { src: img25, type: "Women Evening Wear", price: constantPrice },
    { src: img26, type: "Men Sportswear", price: constantPrice },
    { src: img27, type: "Women Fashionable Tops", price: constantPrice },
    { src: img28, type: "Men Formal Collection", price: constantPrice },
    { src: img29, type: "Women Activewear", price: constantPrice },
    { src: img30, type: "Women Stylish Coats", price: constantPrice },
    { src: img31, type: "Men Outdoor Gear", price: constantPrice },
    { src: img32, type: "Women Trendy Bottoms", price: constantPrice },
    { src: img33, type: "Women Fashion Accessories", price: constantPrice },
  ];

  const filteredItems = items.filter((item) => {
    const { isChecked, womenChecked, unisex, premium, stylish, casual } = filters;
    const matchesSearch = item.type.toLowerCase().includes(searchTerm.toLowerCase());

    if (isChecked && womenChecked) {
      return (item.type.includes("Men") || item.type.includes("Women")) && matchesSearch;
    }
    if (unisex) {
      return (item.type.includes("Men") || item.type.includes("Women")) && matchesSearch;
    }
    if (stylish) {
      return item.type.includes("Stylish") && matchesSearch;
    }
    if (premium) {
      return item.type.includes("Premium") && matchesSearch;
    }
    if (casual) {
      return item.type.includes("Casual") && matchesSearch;
    }
    if (isChecked) {
      return item.type.includes("Men") && matchesSearch;
    }
    if (womenChecked) {
      return item.type.includes("Women") && matchesSearch;
    }
    else{
      console.log("enter a proper")
    }
    return matchesSearch;
  });

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className={`sticky top-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg z-10`}>
        <div className="flex items-center justify-between p-4 max-w-screen-lg mx-auto">
          <img src={logo} alt="Logo" className="h-12 cursor-pointer transition-transform transform hover:scale-110" onClick={() => window.location.href = "http://localhost:5173/"} />
          <div className="flex space-x-4 cursor-pointer">
            <SearchIcon sx={{ fontSize: '1.8rem', color: isDarkMode ? '#ffffff' : '#4A4A4A' }} onClick={toggleSearchInput} />
            <div className="relative">
              <LocalMallIcon sx={{ fontSize: '1.8rem', color: isDarkMode ? '#ffffff' : '#4A4A4A' }} onClick={toggleCartVisibility} />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                  {cartItems.length}
                </span>
              )}
            </div>
            <button onClick={toggleDarkMode} className={`p-2 -mt-2 bg-transparent rounded ${isDarkMode ? 'bg-gray-700 ' : 'bg-gray-300'}  transition duration-300`}>
              {isDarkMode ? <NightlightRoundIcon/> : <WbSunnyIcon/>}
            </button>
          </div>
        </div>
        <div className="border-b border-gray-300"></div>
        {isInputVisible && (
          <div className={`flex justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} p-2`}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={`w-full max-w-md p-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col md:flex-row">
        <div className={`sm:sticky sm:top-32 w-full md:w-1/4 h-auto p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md rounded-md m-4`}>
          <h1 className="text-3xl font-bold mb-5">Filter</h1>
          <div className="border-b border-gray-300 mb-5"></div>
          <h3 className="font-semibold text-xl mb-5">Categories</h3>
          <div className="space-y-4">
            {Object.keys(filters).map((key) => (
              <div className="flex items-center text-lg" key={key}>
                <input
                  type="checkbox"
                  name={key}
                  checked={filters[key]}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={key} className={`cursor-pointer capitalize ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{key.replace(/Checked/, '')}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 p-4 mb-10">
          <h1 className="text-4xl font-bold text-center font-mono mt-8">
            Latest <span className="text-blue-600">Arrivals</span>
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 justify-center mt-6">
            {filteredItems.map((item, index) => (
              <div key={index} onClick={() => handleAddToCart(item)} className={`cursor-pointer transition-transform transform hover:scale-105 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
                <Listimgs src={item.src} type={item.type} />
                <div className="p-4 text-center">
                  <p className={`text-md pb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isCartVisible && (
          <div className={`sticky top-32 w-full md:w-1/4 h-auto p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md overflow-x-hidden overflow-y-hidden rounded-md m-4`}>
            <h1 className="text-3xl font-bold mb-5">Cart</h1>
            <Cart items={cartItems} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Listitem;
