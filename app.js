const express = require ('express');
const path = require('path')
const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname + '/src/views/'));

//Importación de rutas
const mainRoutes = require ('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const { notFoundPage } = require('./src/routes/errorHandlers');
const authControllers = require('./src/controllers/authControllers');

app.use(express.static('public'));

//Rutas de mi aplicacion
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes)
app.use(notFoundPage);


app.listen(4000, ()=> console.log("Servidor corriendo en http://localhost:4000"));