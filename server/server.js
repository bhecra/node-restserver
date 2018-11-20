require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//app.use son middlewares, cada que el codigo para por aqui se disparan las funciones
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application json
app.use(bodyParser.json());


app.get('/usuario', (req, res) => {
    //res.send('Hola mundo'); //normal
    res.json('get Usuario'); //json
});
app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "Se necesita el nombre"
        });
    } else {

        res.json({
            body
        }); //json
    }
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    }); //json
});
app.delete('/usuario', (req, res) => {
    res.json('delete Usuario'); //json
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando Puerto 3000');
});