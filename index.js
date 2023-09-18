const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json')


/*
* GET - obtener recursos
* POST - almacenar/crear recursos
* PUT - modificar una parte de un recurso
* PUT - modificar un recurso completo
* DELETE - borrar un recurso
* */

app.get("/", (req, res, next) => {
    return res.status(200).send("Bienvenido al pokedex ☆*: .｡. o(≧▽≦)o .｡.:*☆");
});

app.get("/pokemon", (req, res, next) => {
    return res.status(200).send(pokemon)
});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next)=>{
    const id = req.params.id - 1;
    (id >= 0 && id <= 151) ?
        res.status(200).send(pokemon[req.params.id -1]) :
        res.status(404).send("Pokemón no encontrado");

});
app.get('/pokemon/:name([A-Za-z]+)', (req, res, next) => {

    //condición ? valor sí verdadero : valor si falso

    const name = req.params.name;
    const pk = pokemon.filter((p)=> {
       return (p.name.toUpperCase() === name.toUpperCase()) ? p : null;
    });

    console.log(pk);

    (pk.length > 0) ?
        res.status(200).send(pk) : 
        res.status(404).send("Pokemon no encontrado");

});

app.listen(process.env.PORT || 3000, () =>{
    console.log("Server is running...")
});