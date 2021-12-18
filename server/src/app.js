const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/users'));

module.exports = app;