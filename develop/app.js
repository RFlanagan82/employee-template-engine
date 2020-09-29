const Employee = require("./lib/Employee");
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
const employeesArray = [];


console.log("Please build your team.")

//Create a basic prompt function that takes in the same questions regardless of employee type.
basicPrompt()
function basicPrompt(userInput) {
    inquirer.basicPrompt([
        {
            type: "input",
            message: "Enter employee name.",
            name: "name" 
        },
        {
            type: "input",
            message: "Please enter employee id.",
            name: "id"
        },
        {
            type: "input",
            message: "Now enter employee email.",
            name: "email"
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "I don't want to add any more team members."
            ]
        },
    ]).then(function(res){
        uniquePrompt(res);
    }).catch(function(err){
        if(err) throw err;
        console.log("basic prompt answers have been logged")
    })
};

//Define function for special case employee type questions
function uniquePrompt() {

    inquirer.uniquePrompt ([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "name" 
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your engineer's Github username?",
            name: "github"
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "role",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members."
            ]
        },
    ]);
};


// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

render();

//Now write it to a file named `team.html` in thw `output` folder. 
//You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. 

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


// {
//     type: "input",
//     message: "What is your office number?",
//     name: "officeNumber"
// },