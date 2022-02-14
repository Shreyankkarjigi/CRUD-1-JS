const express=require('express')
import fetch from 'node-fetch';
const app=express()
const response = await fetch('https://data.covid19india.org/v4/min/data.min.json');
const body = await response.text();

app.get('/',(req,res)=>{
    res.send(body)
})
app.listen(3000,()=>{
    console.log('listening')
})





