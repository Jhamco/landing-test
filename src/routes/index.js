
const express = require('express');
const router = express.Router();    //Sirve para crear multiples rutas y mantenerla en archivos por separado
router.get('/', (req, res)=>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));       //__dirname te muestra la direccion donde esta el archivo, se concatena con el html
    res.render('index.html',{title: 'I dont want to miss you',hello:'Jhampierre'});  //Para validar con ejs(Motor de plantilla, donde se puede programar en html)
                                                                          //Lo que esta entre llaves, son valores que se puede agregar al ejs
  });

router.get('/video', (req, res)=>{
    res.render('video.html',{title: 'Video'});  
});

router.get('/message', (req, res)=>{
    res.render('message.html',{title: 'Message'}); 
});
  module.exports = router;