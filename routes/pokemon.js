const express = require ('express')
const pokemon = express.Router();
const  db = require('../config/database')

//Pokemon nwn


pokemon.post("/", (req, res, next)=>{
    return res.status(200).send(req.body.name);
});

pokemon.get("/", async (req, res, next) => {

    const pkmn = await db.query("SELECT * FROM pokemon");
    return res.status(200).json(pkmn);
});

pokemon.get('/:id([0-9]{1,3})', (req, res, next)=>{
    const id = req.params.id - 1;
    (id >= 0 && id <= 151) ?
        res.status(200).send(pokemon[req.params.id -1]) :
        res.status(404).send("Pokemón no encontrado");

});
pokemon.get('/:name([A-Za-z]+)', (req, res, next) => {

    //condición ? valor sí verdadero : valor si falso

    const name = req.params.name;

    const pkmn = pk.filter((p)=> {
        return (p.name.toUpperCase() === name.toUpperCase()) && p;
    });


    (pkmn.length > 0) ?
        res.status(200).send(pkmn) :
        res.status(404).send("Pokemon no encontrado");

});

module.exports = pokemon;