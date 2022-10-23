//Import Employee constructor
const Employee = require(`./Employee`);

//Extend with Intern constructor
class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school;
    };

    getSchool = () => this.school;
    
    getRole = () => "Intern"
};

//Export class for use
module.exports = Intern;