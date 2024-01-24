import CoinPriceChange from './coin';
import { useEffect } from 'react';

const CoinStack = ({parameter,site}) => {
  let data=[]
  let positiveCoins=[]
  let negativeCoins=[]
  useEffect(async function(){
    const coins=await fetch("https://localhost:3000/",{
      params:{
        site:site,
        parameter:parameter
      }
    });
    data=await coins.json();
    positiveCoins=data[0];
    negativeCoins=data[1];
  })
  
  return (
    <div className="flex flex-col items-center">
      {positiveCoins.map((coin, index) => (
        <CoinPriceChange key={index} {...coin} />
      ))}
      <div className="h-5"></div>
      {negativeCoins.map((coin, index) => (
        <CoinPriceChange key={index} {...coin} />
      ))}
    </div>
  );
};

export default CoinStack;
