//Import Employee constructor
const Employee = require("./Employee");

//Extend with engineer constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
};

//Export module for use
module.exports = Engineer;