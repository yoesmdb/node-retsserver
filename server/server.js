require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/usuario', (req, res) => {
    res.json('empesemos...!');
});

//Nuevos registros
app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        });
    } else {
        res.json({ ersona: body });
    }
});

//actualizar registros
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

//actualizar estado registros
app.delete('/usuario', (req, res) => {
    res.json('empesemos...!');
});

app.listen(process.env.PORT, () => {
    console.log('escuchando el puerto 3000');
});