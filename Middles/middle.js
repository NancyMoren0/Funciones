var saludo = (req,res,next)=>{  
    console.log("Hola");
    next();
}

//.toLocaleString() se usa en JavaScript para convertir una fecha (Date) en una cadena de texto
var fecha = (req, res, next) => {  
    const hoy = new Date();
    req.fecha = hoy.toLocaleDateString(); // Obtiene solo la fecha
    console.log("Fecha de entrega: " + req.fecha);
    next();
}
var hora = (req, res, next) => {  
    const hoy = new Date();
    req.hora = hoy.toLocaleTimeString(); // Obtiene solo la hora
    console.log("Hora de entrega: " + req.hora);
    next();
}

module.exports.saludo=saludo;
module.exports.fecha=fecha;
module.exports.hora=hora;