const Employee = require("./develop/lib/Employee");
const Manager = require("./develop/lib/Manager");
const Engineer = require("./develop/lib/Engineer");
const Intern = require("./develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "./develop/output");
const outputPath = path.join(OUTPUT_DIR, ".team.html");

//Need to create a variable that will be used as a function later that will dynamically build the HTML page
const render = require("./develop/lib/htmlRenderer");

//Need to create an array containing all employee objects;
const employeesArray = [];

//Create a standard employee prompt function using inquirer that takes in the same questions regardless of employee type.
employeePrompt()
function employeePrompt() {
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
            //Bring in the StopRoster function to ask if they are done adding employees and to write the html if so.
            stopRoster();
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
            //Bring in the StopRoster function to ask if they are done adding employees and to write the html if so.
            stopRoster();
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
            //Bring in the StopRoster function to ask if they are done adding employees and to write the html if so.
            stopRoster();
        }).catch(function(err){
            if(err) throw err
        })
    }
};

//Need to create a function that allows the user to cease adding employees if they want
function stopRoster(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to stop adding employees at this time?",
            name: "stop"
        }

    // After the user has input all employees desired, call the `render` function (required above) and pass in an  the `render` function will generate and return a block of HTML including templated divs for each employee

    ]).then(function(res){
        if(res.stop){
            const outputEmployeeData = render(employeesArray);

        //Now write it to a file named `team.html` in thw `output` folder. 
        //You can use the variable `outputPath` above target this location.
            fs.writeFile(outputPath, outputEmployeeData, function(err){
                if (err) throw err;
            })
        // they'll go straight back to the employeePrompt function if they choose to continue adding employees.
        } else {
            employeePrompt();
        }
    })
};



