var express = require('express');
var router = express.Router();
//var serial = require("../prueba");

//se importa el modulo de "SerialPort"
var SerialPort = require("serialport").SerialPort
//se configura el puerto y la velocidad de transmisicion
try{
var serialPort = new SerialPort("COM3", {
    baudrate: 9600
});
}
catch(e){
    console.log('e:', e);
}

//se asigna un evento que se active cuando la conexion del puerto serial
//este abierto
serialPort.on("open", function () {
    //se muestra un mensaje por consola (CMD)
    console.log('Conexion con arduino lista');
});


//ruta o url a travez de la que se va a enviar el mensaje
router.post('/escribir', function (req, res) {
    //se obtiene el objeto JSON en el cual esta el mensaje enviado
    var cuerpo = req.body;
    //se envia el mensaje al arduino el cual esta contenido en el objeto
    serialPort.write(cuerpo.palabra);
    //se responde al explorador para evitar errores y cerrar la conexion
    res.sendStatus(200);
})

module.exports = router;
