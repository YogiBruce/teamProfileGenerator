//Import Employee constructor
const Employee = require("./Employee");

//Extend with Manager constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole(){
        return "Manager";
    };
};

//Export class for use
module.exports = Manager;