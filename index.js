var express=require('express');
var app=express();
require("dotenv").config();
const port=process.env.PORT||5000;


app.get('/',(req,res)=>
{
    res.send("Hello World!!!!");
})
app.listen(port,()=>
{
   if(port)
   {
        console.log("Application is running in",port);
   }
});