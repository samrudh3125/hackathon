import React, { useState } from 'react';

const TopBar = ({onClick}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-black text-violet-500 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-lg font-bold">NOOB Coins</h1>
      </div>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none"
        >
          <span className="mr-2">Select Source</span>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-md">
            <ul className="py-2">
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <img src='https://avatars.githubusercontent.com/u/7111837?s=200&v=4' className='w-6 h-6'/>
                <span onClick={onClick("coingecko")} className="ml-2">CoinGecko</span>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <img src='https://logovtor.com/wp-content/uploads/2019/10/coincap-io-logo-vector.png' className='w-6 h-6'/>
                <span onClick={onClick("coincap")} className="ml-2">CoinCap</span>
              </li>
              {/* Add more options as needed */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
