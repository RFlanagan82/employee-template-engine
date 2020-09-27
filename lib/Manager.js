// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

"use strict"

class Employee {
    //here the constructor I am building is taking in 3 parameters of employee name, email, and id.
    constructor(Name, Id, Email, Role) {
        //here we take these parameters and assign them to properties of the class as an object
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;  
    }
};

class Manager extends Employee {
    constructor(Name, Id, Email, OfficeNumber, Role){
        //set up properties again but use the  'Super' function as a shortcut
        super(Name, Id, Email, Role);
        this.officeNumber = OfficeNumber;
    };

};

const Name = new Manager("Alice");
const Id = new Manager(100);
const Email = new Manager("test@test.com");
const OfficeNumber = new Manager(1);
const Role = new Manager("Alice", 100, "test@test.com");

//let manager = new Manager(this.name, this.id, this.email, this.officeNumber);

//manager.registeredManager();

module.exports = Manager;