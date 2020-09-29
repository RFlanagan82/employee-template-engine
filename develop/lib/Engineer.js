// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        //set up properties again but use the  'Super' function as a shortcut
        super(name, id, email);
        this.github = github;
    };

 getGithub(){
    return this.github;
 }
 
 getRole(){
     return "Engineer";
 }
 
};


const e = new Engineer("Alice", 100, "test@test.com", "GitHubUser");

module.exports = Engineer;