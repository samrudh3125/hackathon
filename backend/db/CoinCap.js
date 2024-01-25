
const mongoose=require("mongoose");

mongoose.connect("");

const coinSchema=new mongoose.Schema({
    Symbol:String,
    name:String,
    marketCapUsd:Number,
    volumeUsd24Hr:Number,
    changePercent24Hr:String
})

const CoinCap=mongoose.model("CoinGecko",coinSchema);

async function fetchCoins(){
    const response=await fetch("https://api.coincap.io/v2/assets",{
        params:{
            limit:30
        }
    });
    let coins=await response.json();
    coins.map(async coin=>{
        await CoinCap.create({
            Symbol:coin.symbol,
            name:coin.name,
            marketCapUsd:parseInt(coin.marketCapUsd),
            volumeUsd24Hr:parseInt(coin.volumeUsd24Hr),
            changePercent24Hr:parseInt(coin.changePercent24Hr)
        })
    });
}

fetchCoins();
module.exports={CoinCap};
