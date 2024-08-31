const express = require("express");
require("dotenv").config();
const app=express();
const nm=require("../Rutas/rutas");


app.use("/",nm);



const port=process.env.PORT || 3000 //si no esta disponoble ala otra variaboe ociúpa esa
//lisen puede recibir dos variables 


app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});
