const express = require ('express');
const path = require('path')
const app = express();

servidor.set('view engine','ejs')
servidor.set('views', path.join(__dirname, '/src/views'))

//Importación de rutas
const mainRoutes = require ('./src/routes/mainRoutes');
const shopRoutes = require('./src/router/shopRoutes');
const adminRoutes = require('./src/router/adminRoutes');
const { notFoundPage } = require('./src/utils/errorHandlers');

app.use(express.static('public'));

//Rutas de mi aplicacion
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use(notFoundPage);


app.listen(4000, ()=> console.log("Servidor corriendo en http://localhost:4000"));