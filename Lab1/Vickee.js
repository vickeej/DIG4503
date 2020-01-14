const Person = require("./Person.js");

class Vickee extends Person {
    constructor (name, favoriteColor, gender) {
        super(name, favoriteColor);
        this.gender = gender;
    }
}

module.exports = Vickee;