// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee"); 

class Engineer extends Employee {
    constructor(github) {
        this.github = github;

        super(name, email, title, id); 
        this.getName
        this.getId
        this.getRole
        this.getEmail
    }

    getGithub() {
        console.log(`Employee GitHub: ${this.github}`); 
        return this.github; 
    }
}

module.exports = Engineer;
