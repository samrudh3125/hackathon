// DropdownComponent.js
import React from 'react';

const Options = ({ onOptionSelect }) => {

  return (
    <div className="relative inline-block">
      <button className="bg-gray-500 text-white px-4 py-2 rounded-md focus:outline-none">
        Options
      </button>
      <div className="absolute hidden mt-2 w-48 bg-white rounded-md shadow-md">
        <ul>
          <li onClick={onOptionSelect("changePercent24Hr")} className="py-2 px-4 cursor-pointer hover:bg-gray-100">
            changePercent24Hr
          </li>
          <li onClick={onOptionSelect("marketCapUsd")} className="py-2 px-4 cursor-pointer hover:bg-gray-100">
            marketCapUSD
          </li>
          <li onClick={onOptionSelect("volumeUsd24Hr")} className="py-2 px-4 cursor-pointer hover:bg-gray-100">
            VolumeUSD24Hr
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Options;
