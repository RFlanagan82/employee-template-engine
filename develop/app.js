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


//console.log("Please build your team.")

//Create a basic prompt function that takes in the same questions regardless of employee type.
basicEmployeePrompt()
function basicEmployeePrompt(userInput) {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter employee name?",
            name: "name" 
        },
        {
            type: "input",
            message: "Please enter employee id?",
            name: "id"
        },
        {
            type: "input",
            message: "Now enter employee email?",
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
                ]
        },
    ]).then(function(res){
        uniquePrompt(res);
    }).catch(function(err){
        if(err) throw err;
        console.log("basic prompt answers have been logged.")
    })
};

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

//Define function to ask for special case employee role-type questions

function uniquePrompt(userReply) {
    //conditional if employee is a manager
    if(userReply.role === "Manager"){
        inquirer.prompt([
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber"
            }
        ]).then(function(uniqueReply){
            //create a manager variable to take in new manager data
            const manager = new Manager(userReply.name, userReply.id, userReply.email, uniqueReply.officeNumber)
            //push to employees array
            employeesArray.push(manager);
        }).catch(function(err){
            if(err) throw err
        })
    //conditional for if employee is an engineer
    } else if(userReply.role === "Engineer"){
        inquirer.prompt([
            {
                type: "input",
                message: "What is your github username?",
                name: "github"
            }
        ]).then(function(uniqueReply){
            //create an engineer variable to take in new engineer data
            const engineer = new Engineer(userReply.name, userReply.id, userReply.email, uniqueReply.github)
            //push to employees array
            employeesArray.push(engineer);
        }).catch(function(err){
            if(err) throw err
        })
    //conditional for if employee is an intern
    } else {
        inquirer.prompt([
            {
                type: "input",
                message: "What school did you attend?",
                name: "school"
            }
        ]).then(function(uniqueReply){
            //create an intern variable to take in new intern data
            const intern = new Intern(userReply.name, userReply.id, userReply.email, uniqueReply.school)
            //push to employees array
            employeesArray.push(intern);
        }).catch(function(err){
            if(err) throw err
        })
    }
};
// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee

//Now write it to a file named `team.html` in thw `output` folder. 
//You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. 



// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


