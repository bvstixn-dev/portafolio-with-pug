const express = require('express');
const app = express();



//configuracion de pug
app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.static('public'));
app.use(express.json());


//rutas
const rutas = require('./routes/index');
app.use('/', rutas);


app.use(express.urlencoded({extended: true}));
app.listen(3000, () => {console.log("Servidor Encendido")});

