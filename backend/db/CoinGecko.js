
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://hacker_ben:Kumaon3some@hackathon.vchd8bz.mongodb.net/");

const coinSchema=new mongoose.Schema({
    Symbol:String,
    name:String,
    marketCapUsd:Number,
    VolumeUsd24Hr:Number,
    changePercent24Hr:String
})

const CoinGecko=mongoose.model("CoinGecko",coinSchema);

async function fetchCoins(){
    const response= await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en");
    let coins=await response.json();
    coins.map(async coin=>{
        await CoinGecko.create({
            Symbol:coin.symbol,
            name:coin.name,
            marketCapUsd:coin.market_cap,
            VolumeCapUsd:coin.total_volume,
            changePercent24Hr:change_percent_24Hr
        })
    });
}

fetchCoins();

module.exports={CoinGecko};