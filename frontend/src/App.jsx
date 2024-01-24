
import { useState } from 'react'
import './App.css'
import CoinStack from './components/coinstack'
import TopBar from './components/topbar'
import Options from './components/options';

function App() {
  const [site,setSite]=useState("coingecko");
  const [parameter,setParameter]=useState("changePercent24Hr")

  function siteChange(sitename){
    setSite(sitename);
  }

  function parameterChange(parametername){
    setParameter(parametername);
  }
  return (
    <div className='h-full'>
      <TopBar onClick={siteChange}/>
      <div className='bg-[url(https://png.pngtree.com/thumb_back/fh260/background/20191105/pngtree-stock-market-data-k-line-background-image_321110.jpg)]'>
        <CoinStack parameter={parameter} site={site}/>
        <Options onOptionSelect={parameterChange}/>
      </div>
    </div>
  )
}

export default App
