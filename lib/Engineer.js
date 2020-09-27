// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

"use strict"

class Employee {
    //here the constructor I am building is taking in 3 parameters of employee name, email, and id.
    constructor(name, id, email, role) {
        //here we take these parameters and assign them to properties of the class as an object
        this.name = name;
        this.id = id;
        this.email = email; 
        this.role = role; 
    }

};

class Engineer extends Employee {
    constructor(name, id, email, github, role){
        //set up properties again but use the  'Super' function as a shortcut
        super(name, id, email, github, role);
        this.github = github;
    };

// registeredManager(){
//     console.log(this.name + ' has been registered as a Manager.');
// }
 
};

//let manager = new Manager(this.name, this.id, this.email, this.officeNumber);

//manager.registeredManager();

module.exports = Engineer;
