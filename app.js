const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const ejs = require('ejs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la base de datos MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Configuración de las sesiones y cookies
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
}));

app.use(cookieParser());

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');

// Middleware para procesar datos JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de autenticación y tienda (deben implementarse en archivos separados)

// Página de inicio
app.get('/', (req, res) => {
  res.render('index');
});

// Página de inicio de sesión
app.get('/login', (req, res) => {
  res.render('login');
});

// Autenticación y manejo de cookies
// - Implementa las rutas y lógica de autenticación aquí

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
