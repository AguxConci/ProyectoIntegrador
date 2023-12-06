const express = require ('express');
const path = require('path');
const app = express();


app.set('view engine','ejs');
app.set('views', path.join(__dirname + '/src/views/'));

//Importación de rutas
const mainRoutes = require ('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const { notFoundPage } = require('./src/routes/errorHandlers');

app.use(express.static(__dirname + '/public'))

//middlewares nativos para convertir data del body (POST) a un formato para servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//sobreescribe metodo post de formulario para usar PUT O DELETE
const method = require('method-override');
app.use(method('_method'));


//para utilizar el .env requiero dependencia y leo la constante
require('dotenv').config();
const port = process.env.PORT || 3000


//Rutas de mi aplicacion
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use(notFoundPage);


app.listen(port, () => console.log(`Estoy funcionando en el puerto ${port}`))
//