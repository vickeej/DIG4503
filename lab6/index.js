const Express = require("express");
const App = Express();
const Pokemon = require("json-pokemon");
const chalk = require("chalk");
const port = 80;

const cors = require("cors");
App.use(cors());

App.use('/', Express.static("client/build"));

App.get("/id/:id/", (req, res) => {

    let result = "Invalid! ID does not exisit."; 

    Pokemon.forEach((value) => {
        if(value.id == req.params.id) {
            result = value;
            console.log(chalk.green(req.path));
        }
    });
        
        if(result == "Invalid! ID does not exisit.") {
            console.log(chalk.red(req.path));
        }
        res.send(result);
});

App.get("/name/:name", (req, res) => {

let result = "Invalid! Name does not exisit.";

    Pokemon.forEach((value) => {
        if(value.name == req.params.name) {
            result = value;
            console.log(chalk.green(req.path));
        }
    });
    if(result == "Invalid! Name does not exisit.") {
        console.log(chalk.red(req.path));
    }
    res.send(result);
});

App.listen(port, () => {
    console.log("Server Running!");
})