import dotenv from "dotenv";

const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 8080;
import axios from "axios";





app.get("/", (req, res) => {
    res.send("This is home page.");
});

app.post("/", (req, res,next) => {
    res.send("This is home page with post request.");
    next();
});

// PORT
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
    }

app.get("/reverse/:string",cors(corsOptions), async (req, res, next) => {

    const string = req.params.string;
    const reversed = string.split("").reverse().join("");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let temp = "";
    for(let chars of reversed){
        if(vowels.includes(chars)){
            temp += chars.toUpperCase();
        }else{
            temp += chars;
        }
    }
        res.send(temp);
        next()
    }
    )

app.get("/append",cors(corsOptions), async (req, res, next)=>{
    const dotenv = require('dotenv')
    dotenv.config()
    const start = req.query.start;
    const end = req.query.end;
    process.env.SIMPLE_ARRAY= "CALLAN_BROMBACHER"
    const string:(string | undefined) = process.env.SIMPLE_ARRAY
    let array
    if(typeof string ==="string") {
        array = string.split('_')
        array.push(end)
        array.unshift(start)
        console.log(array)
        res.send(array);
        next()
    }else{
        res.send("string is undefined")
    }
}
)


app.get("/countries",cors(corsOptions), async (req, res, next) => {
    const filter = req.query.filter
    const order = req.query.order
    let data
    let results:object[] = []
    console.log(order)
    const countries = await axios.get("https://api.jsonbin.io/b/5f69afbe65b18913fc510ce8")
    const countriesData:object[] = countries.data
    if (order === "ascending"){
        data =countriesData.sort(function(a, b) {
            return a["vat"] - b["vat"];
        });
    }
    else{
        data = countriesData.sort(function(a, b) {
            return b["vat"] - a["vat"];
        });
    }

    for(let a of data){

        if(a['code'].includes(filter) || a['country'].includes(filter)){
             results.push(a)
        }else if(filter===undefined){
            res.send(JSON.stringify(data))
            next()
        }

    }
    console.log(JSON.stringify(results));
    res.send(JSON.stringify(results))
    next()
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
