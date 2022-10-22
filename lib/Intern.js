//Import Employee constructor
const Employee = require(`./Employee`);

//Extend with Intern constructor
class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

module.exports = Intern