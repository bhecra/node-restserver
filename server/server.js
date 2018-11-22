require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

//app.use son middlewares, cada que el codigo para por aqui se disparan las funciones
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application json
app.use(bodyParser.json());


app.use(require('./routes/index'));


mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;

    console.log('Run database');
})


app.listen(process.env.PORT, () => {
    console.log('Escuchando Puerto 3000');
});