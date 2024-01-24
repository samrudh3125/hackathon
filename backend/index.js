const express=require("express");
const cors=require("cors");
const CoinCap = require("./db/CoinCap");
const CoinGecko= require("./db/CoinGecko");

const app=express();

app.use(cors());

app.get("/",async function(req,res){
    const site=req.params.site;
    const parameter=req.params.parameter;

    if(site==="coincap"){
        coins=CoinCap;
    }
    else if(site==="coingecko"){
        return res.status(200).json({
            CoinGecko
        });
    }


});

app.listen(3000);