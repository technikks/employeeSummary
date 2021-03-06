const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const colors = require("colors");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order or the provided `render` function to work!

// Welcome message.
console.log(`Welcome to the Team Profile Generator!`.magenta.bold);

const team = [] 

// Function to ask user whether they want to input information for a Manager, Engineer, or Intern. 
const startApp = () => {
    inquirer.prompt([
        {
            name: "start", 
            type: "list", 
            message: "Which team member would you like to input information for? Please select one.",
            choices: ["Manager", "Engineer", "Intern"],
        }
    ])
    .then((res) => {
        if (res.start === "Manager") {
            addManager();
        } else if (res.start === "Engineer") {
            addEngineer();
        } else if (res.start === "Intern") {
            addIntern()
        }
    });
};

// Invoking app to start after welcome message
startApp()

// Function to add information about Manager. 
const addManager = () => {
    inquirer.prompt ([
        {
            name: "name", 
            type: "input", 
            message: "What is the manager's name?",
        }, 
        {
            name: "id", 
            type: "number", 
            message: "What is the manager's employee ID?", 
        }, 
        {
            name: "email", 
            type: "input", 
            message: "What is the manager's email address?", 
        }, 
        {
            name: "office", 
            type: "number", 
            message: "What is the manager's office number?", 
        },
        {
            name: "next", 
            type: "confirm", 
            message: "Would you like to add more team members?",
        }
    ])

    // Redirecting based on if user would like to input more team members or not.
    .then((res) => {
        const manager = new Manager(res.name, res.id, res.email, res.office); 
        team.push(manager); 
        if (res.next === true) {
            startApp()
        } else {
            console.log(`Generating profiles for your team...`); 
        }
    })
}; 

// Function to add information about Engineer. 
const addEngineer = () => {
    inquirer.prompt ([
        {
            name: "name", 
            type: "input", 
            message: "What is the engineer's name?",
        }, 
        {
            name: "id", 
            type: "number", 
            message: "What is the engineer's employee ID?", 
        }, 
        {
            name: "email", 
            type: "input", 
            message: "What is the engineer's email address?", 
        }, 
        {
            name: "github", 
            type: "input", 
            message: "What is the engineer's github handle?", 
        },
        {
            name: "next", 
            type: "confirm", 
            message: "Would you like to add more team members?",
        }
    ])

    // Redirecting based on if user would like to input more team members or not.
    .then((res) => {
        const engineer = new Engineer(res.name, res.id, res.email, res.github); 
        team.push(engineer); 
        if (res.next === true) {
            startApp()
        } else {
            console.log(`Generating profiles for your team...`); 
        }
    }); 
}; 

// Function to add information about Intern. 
const addIntern = () => {
    inquirer.prompt ([
        {
            name: "name", 
            type: "input", 
            message: "What is the intern's name?",
        }, 
        {
            name: "id", 
            type: "number", 
            message: "What is the intern's employee ID?", 
        }, 
        {
            name: "email", 
            type: "input", 
            message: "What is the intern's email address?", 
        }, 
        {
            name: "school", 
            type: "input", 
            message: "Which school is the intern currently attending at?", 
        },
        {
            name: "next", 
            type: "confirm", 
            message: "Would you like to add more team members?",
        }
    ])

    // Redirecting based on if user would like to input more team members or not.
    .then((res) => {
        const intern = new Intern(res.name, res.id, res.email, res.school); 
        team.push(intern); 
        if (res.next === true) {
            startApp()
        } else {
            console.log(`Generating profiles for your team...`); 
        }
    })
}; 


// After the user has input all employees desired, call the `render` function (require above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

render(team);


// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it does not.
fs.writeFile('team.html')





