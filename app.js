const express= require('express');
const mysql =require('mysql');
const app=express();
const mysqlconnection=require('./connect')
 
var fetchroutes = require('./routes/fetch.js');
app.use('/fetch', fetchroutes);
app.get('/print',(req,res)=>{
res.send('smile');
});
app.listen('3000',()=>{
    console.log('server started....');
});
