// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee"); 

class Manager extends Employee {
    constructor(name, id, title, email, office) {
        super(name, id, email, title)
        this.office = office;
    }

    getOffice() {
        return this.office; 
    }
}

module.exports = Manager;
