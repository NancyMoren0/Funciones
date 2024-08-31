const express =require("express");
const app=express.Router();
var saludo=require("../Middles/middle").saludo;
var fecha=require("../Middles/middle").fecha;
var hora=require("../Middles/middle").hora;


app.get("/",saludo,fecha,hora,(req,res)=>{
    res.send("Hola estas en raíz");

});

app.get("/hola",hora,fecha,(req,res)=>{
    res.send("Hola 2");

});


module.exports=app;