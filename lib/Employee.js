//Employee Constructor

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    //Return functions to call data
    getName() {
        return this.name;
    };

    getID() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'Employee';
    };
};

//Export class for use
module.exports = Employee;