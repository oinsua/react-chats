const express = require('express');
const http = require('http');
const path = require('path');
/* const mongoose = require('mongoose'); */

//webpack. Vamos a configurarlo para que cada vez que se produzca un cambio en "src" webpack transforme y empquete en "public"
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config');

const app = express();
const server = http.createServer(app); //Crear un server a traves de http para establecer la coneccion websocket
const io = require('socket.io')(server) //Establecer la conexion en tiempo real a traves de socketio con el server
//Middleware
app.use(webpackDevMiddleware(webpack(config({mode:'production'}))))
  
app.set("port", process.env.PORT || 3000) //Asignar un puerto en caso de que el servidor no me lo asigne

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));  //Definir el directorio con los archivos que van al navegador

//Estableciendo una conexion de socket con el cliente.
require('./socket/socket')(io);

/* //Conectando a la base de datos
mongoose.connect('mongodb://localhost/chat')
			   .then(db => console.log('db is connected'))
			   .catch(error => console.log('db is not connected, error:',error )) */

//Iniciando el servidor por el puerto 3000
server.listen(app.get('port'), ()=>{
	console.log(`server on port ${app.get('port')}`);
})