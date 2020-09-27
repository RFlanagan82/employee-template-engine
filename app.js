const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function initialManagerPrompt() {
    return inquirer.managerPrompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "mgrName" 
        },
        {
            type: "input",
            message: "What is your manager's id?",
            name: "mgrId"
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "mgrEmail"
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "mgrOfficeNum"
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "employee-selection-type",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members."
            ]
        },
    ])
};


function engineerPrompt() {
    return inquirer.engineerPrompt ([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "engName" 
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "engId"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "engEmail"
        },
        {
            type: "input",
            message: "What is your engineer's Github username?",
            name: "engGitHubName"
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "employee-selection-type",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members."
            ]
        },
    ]);
};

function internPrompt() {
    return inquirer.internPrompt ([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "intName" 
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "intId"
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "intEmail"
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "intSchool"
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "employee-selection-type",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members."
            ]
        },
    ]);
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
