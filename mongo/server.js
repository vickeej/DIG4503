const Express = require("express");
const App = Express();
const port = 80;

const Database = require("./Database.js");

let database = new Database();

App.get("/movies/title/:title", (req, res) => {
    let result = {"error": "Couldn't find!"};

    let movie = database.findTitle(req.params.title);

    if (movie != null) {
        result = movie;
    }

    res.json(result);
});

App.get("/movies/year/:year", (req, res) => {
    let result = {"error": "Couldn't find!"};

    let movie = database.findYear(req.params.year);

    if (movie != null) {
        result = movie;
    }

    res.json(result);
});

App.listen(port, () => {

});
