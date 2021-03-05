const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

function addEmployee() {
    inquirer.prompt([
        {
        type: "list", 
        message: "Which team member would you like to input information for?",
        name: "add", 
        choices: ["Manager", "Engineer", "Intern"],
    },
    ])
    .then((answer) => {
        return answer.add;
    });

    if (answer.add === "Manager") {
        addManager()
    } else if (answer.add === "Engineer") {
        addEngineer()
    } else if (answer.add === "Intern") {
        addIntern()
    }
};

function toContinue() {
    inquirer.prompt([
        {
            type: "confirm", 
            message: "Would you like to add more team members?", 
            name: "next", 
        },
    ])
    .then((answer) => {
        return answer.next;
    });

    if (answer.next === true) {
        addEmployee()
    } else if (answer.next === false) {
        console.log(`Your team list is being generated...`)
    }
}

function addManager() {
    inquirer.prompt([
        {
            type: "input", 
            message: "What is the manager's name?", 
            name: "name", 
        },
        {
            type: "number", 
            message: "What is the manager employee ID?",
            name: "id", 
        },
        {
            type: "input", 
            message: "What is the manager's email address?", 
            name: "email", 
        },
        {
            type: "number", 
            message: "What is the manager's office number?", 
            name: "office", 
        },
    ])
   toContinue()
};

function addEngineer() {
    inquirer.prompt([
        {
            type: "input", 
            message: "What is the engineer's name?", 
            name: "name", 
        },
        {
            type: "number", 
            message: "What is the engineer employee ID?",
            name: "id", 
        },
        {
            type: "input", 
            message: "What is the engineer's email address?", 
            name: "email", 
        },
        {
            type: "number", 
            message: "What is the engineer's GitHub handle?", 
            name: "github", 
        },
    ])
    toContinue()
};

function addIntern() {
    inquirer.prompt([
        {
            type: "input", 
            message: "What is the intern's name?", 
            name: "name", 
        },
        {
            type: "number", 
            message: "What is the intern's employee ID?",
            name: "id", 
        },
        {
            type: "input", 
            message: "What is the intern's email address?", 
            name: "email", 
        },
        {
            type: "number", 
            message: "What is the name of the school the intern is currently attending at?", 
            name: "school", 
        },
    ])
    toContinue()
};

// After the user has input all employees desired, call the `render` function (require above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order or the provided `render` function to work! ```
