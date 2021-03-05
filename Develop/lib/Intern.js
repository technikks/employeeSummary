// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee"); 

class Intern extends Employee {
    constructor(name, id, title, email, school) {
        super(name, id, email, title)
        this.school = school;
    }

    getSchool() {
        return this.school; 
    }
}

module.exports = Intern;
