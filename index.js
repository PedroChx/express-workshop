const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const app = express();
const pokemon = require('./routes/pokemon')

//Pokemon nwn


/*
* GET - obtener recursos
* POST - almacenar/crear recursos
* PUT - modificar una parte de un recurso
* PUT - modificar un recurso completo
* DELETE - borrar un recurso
* */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res, next) => {
    return res.status(200).send("Bienvenido al pokedex ☆*: .｡. o(≧▽≦)o .｡.:*☆");
});

app.use("/pokemon", pokemon);

app.listen(process.env.PORT || 3000, () =>{
    console.log("Server is running...")
});