const express = require('express');
const app = express();   //es el servidor
const path = require('path');   //Para usar en la ubicacion del html or ejs

//configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);   //Esto es para cambiar de ejs a html, y lo aceptes
app.set('view engine','ejs');

//routes
//require('./routes/index.js'); //Esto solo es la ruta
app.use(require('./routes/index.js'));  //Para usarla

//static files
app.use(express.static(path.join(__dirname,'public')));     //Cualquier archivo que cree ahi se podra ver en el navegador

//escuchando el servidor
app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'));
});


