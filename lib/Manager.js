//Import Employee constructor
const Employee = require("./Employee");

//Extend with Manager constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.officeNumber = officeNumber;
    };

    getOfficeNumber = () => this.officeNumber;
    
    getRole = () => "Manager";
    
};

//Export class for use
module.exports = Manager;