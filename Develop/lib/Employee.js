// TODO: Write code to define and export the Employee class

class Employee {
    // Setting constructor with properties that every employee, no matter of their title, will provide.
    constructor(name, id, email){
        this.name = name; 
        this.id = id; 
        this.email = email; 
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id; 
    }

    getRole() {
        return this.title;
    }

    getEmail() {
        return this.email;
    }
}

Employee.lastId = 0; 

module.exports = Employee; 