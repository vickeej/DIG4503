const Express = require("express");
const App = Express();
const port = 80;
const chalk = require('chalk');

const Pokemonz = require('./Pokemonz.js');
let pokemonz = new Pokemonz();

App.get("/pokemons/name/#name", (req, res) => {
    res.send(pokemonz.readName(req));
});

App.get("/pokemons/id/#id", (req, res) => {
    res.send(pokemonz.readID(req));
});


App.listen(port, () => {
    console.log("Server running!");
});