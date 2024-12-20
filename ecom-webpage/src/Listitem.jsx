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

function Listitem() {
  const [isChecked, setIsChecked] = useState(false);
  const [womenChecked, setWomenChecked] = useState(false);
  const [unisex , setUnixsex] = useState(false);
  const [premium , setpremiun] = useState(false);
  const [stylish , setStylish] = useState(false);
  const [casual , setCasual] = useState(false);

  const StylishboxHandler = (e) => {
    setStylish(e.target.checked);
  };

  const casualboxhanlder= (e) => {
    setCasual(e.target.checked);
  };

  const checkboxHandler = (e) => {
    setIsChecked(e.target.checked);
  };

  const womenCheckboxHandler = (e) => {
    setWomenChecked(e.target.checked);
  };

  const unisexHandler = (e) => {
    setUnixsex(e.target.checked);
  };
  
  const premiumHandler = (e)=> {
    setpremiun(e.target.checked);
  }
  const items = [
    { src: img20, type: "Men Premium Quality" },
    { src: img21, type: "Women Stylish Wear" },
    { src: img22, type: "Men Premium Quality" },
    { src: img23, type: "Women Trendy Collection" },
    { src: img24, type: "Men Casual Collection" },
    { src: img25, type: "Women Summer Styles" },
    { src: img26, type: "Men Premium Quality" },
    { src: img27, type: "Women Evening Wear" },
    { src: img28, type: "Men Sportswear" },
    { src: img29, type: "Women Fashionable Tops" },
    { src: img30, type: "Men Premium Quality" },
    { src: img31, type: "Women Casual Dresses" },
    { src: img32, type: "Men Formal Collection" },
    { src: img33, type: "Women Activewear" },
    { src: img34, type: "Men Premium Quality" },
    { src: img35, type: "Women Stylish Coats" },
    { src: img36, type: "Men Outdoor Gear" },
    { src: img37, type: "Women Trendy Bottoms" },
    { src: img38, type: "Men Premium Quality" },
    { src: img39, type: "Women Fashion Accessories" },
    { src: img40, type: "Men Premium Quality" },
  ];

  const filteredItems = items.filter((item) => {
    if (isChecked && womenChecked) {
      return item.type.includes("Men") || item.type.includes("Women");
    }
    if(unisex) {
      return item.type.includes("Men") || item.type.includes("Women");
    }
    if(stylish) {
      return item.type.includes("Stylish") 
    }
    if(premium) {
      return item.type.includes("Premium") ;
    }
    if(casual) {
      return item.type.includes("Casual") ;
    }
    if (isChecked) {
      return item.type.includes("Men");
    }
    if (womenChecked) {
      return item.type.includes("Women");
    }
    return true; 
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="flex items-center justify-between p-4 max-w-screen-lg mx-auto">
          <img src={logo} alt="Logo" className="h-12 cursor-pointer"
           onClick={() => window.location.href = "http://localhost:5173/"} />
          <div className="flex space-x-4 cursor-pointer">
            <SearchIcon sx={{ fontSize: '1.8rem' }} />
            <LocalMallIcon sx={{ fontSize: '1.8rem' }} />
          </div>
        </div>
        <div className="border-b border-gray-300"></div>
      </div>

      <div className="flex flex-1">
        <div className="w-96 mt-10 p-4 bg-white shadow-md rounded-md m-8 ">
          <h1 className="text-3xl font-bold mb-5">Filter</h1>
          <div className="border-b border-gray-300 mb-5"></div>
          <h3 className="font-semibold text-xl mb-5">Categories</h3>
          <div className="space-y-4">
            <div className="flex items-center text-lg">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={checkboxHandler}
                className="mr-2"
              />
              <p>Mens</p>
            </div>
            <div className="flex items-center text-lg">
              <input
                type="checkbox"
                checked={womenChecked}
                onChange={womenCheckboxHandler}
                className="mr-2"
              />
              <p>Womens</p>
            </div>
            <div className="flex items-center text-lg">
              <input
                type="checkbox"
                checked={unisex}
                onChange={unisexHandler}
                className="mr-2"
              />
              <p>Unisex</p>
            </div>
            <div className="flex items-center text-lg">
              <input
                type="checkbox"
                checked={premium}
                onChange={premiumHandler}
                className="mr-2"
              />
              <p>Premium</p>
            </div>
            <div className="flex items-center text-lg">
              <input
                type="checkbox"
                checked={stylish}
                onChange={StylishboxHandler}
                className="mr-2"
              />
              <p>stylish</p>
            </div>
              <div className="flex items-center text-lg">
              <input
                type="checkbox"
                checked={casual}
                onChange={casualboxhanlder}
                className="mr-2"
              />
              <p>Casual</p>
            </div>
          </div>
        </div>

        <div className="h-full flex-1  p-4 mb-10">
          <h1 className="text-4xl font-bold text-center font-mono mt-8 text-gray-300">
            Latest <span className="text-gray-700">Arrivals</span>
          </h1>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {filteredItems.map((item, index) => (
              <Listimgs key={index} src={item.src} type={item.type} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Listitem;
