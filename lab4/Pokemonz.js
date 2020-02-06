const Pokemon = require('./Pokemon.js');
const faker = require('faker');

class Pokemonz {
    constructor() {
    
        this.pokemons = [];

        for(let i = 0; i < 99; i++)
        {
            let name = faker.name.findName();
            let ID = faker.ID.findID();
            this.pokemonz.push(new Person(name, ID));
        }

        readID(req) {

            let result = {"error": "Can't find!"};

            people.forEach(value) => {
                if(value.ID == req.params.ID) {
                    result = value;
                }
            });

            if(result.error) {
                console.log(chalk.red('Invalid!'));
            } else {
                console.log(chalk.green('Valid!'));
            }
        }

    }
}

module.exports = Pokemonz;