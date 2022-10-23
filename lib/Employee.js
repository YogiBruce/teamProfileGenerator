//Employee Constructor

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    //Return functions to call data
    getName = () => this.name;

    getID = () => this.id;

    getEmail = () => this.email;

    getRole = () => "Employee";

};

//Export class for use
module.exports = Employee;