// Coin.js
import React from 'react';

const CoinPriceChange = ({ symbol, percentageChange }) => {
  const textColorClass = percentageChange > 0 ? 'text-green-500' : 'text-red-500';

  return (
    <div className={`bg-black p-4 mb-2 flex items-center justify-between rounded-md shadow-md ${textColorClass}`} style={{ width: '300px' }}>
      <div className="flex-1">
        <h2 className="text-sm font-bold">{symbol}</h2>
      </div>
      <div className="flex-1 text-right">
        <p className="text-sm">{percentageChange}%</p>
      </div>
    </div>
  );
};

export default CoinPriceChange;
