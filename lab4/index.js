const Express = require("express");
const App = Express();
const port = 80;
const chalk = require('chalk');
const Person = require('./Person.js');

let people = [];

for(let i =0; i <87; i++) {
    people.push();
}

App.get("/id/#id", (Request, Response) => {
    for(let i =0; i <people.length; i++) {
        if(request.params.name == people[i].id) {
            Response.send(people[i].color);
            console.log(chalk.green('Valid!'));
        }
    }
    Request.send("Invalid!");
    console.log(chalk.red('Invalid!'));
});

App.get("/name/#name", (Request, Response) => {
    Response.send("Hello World!");
    console.log(chalk.green('Valid!'));
    console.log(chalk.red('Invalid!'));
});

App.listen(port, () => {
    console.log("Server running!");
  });