// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee"); 

class Manager extends Employee {
    constructor(office) {
        this.office = office;

        super(name, email, id); 
        this.name = name; 
        this.email = email; 
        this.id = id; 
    }
}

module.exports = Manager;