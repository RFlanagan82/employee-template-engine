// TODO: Write code to define and export the Employee class

"use strict"

class Employee {
    //here the constructor I am building is taking in 3 parameters of employee name, email, and id.
    constructor(Name, Id, Email, Role) {
        //here we take these parameters and assign them to properties of the class as an object
        this.name = Name;
        this.id = Id;
        this.email = Email; 
        this.role = Role; 
    }

};

const Name = new Employee("Alice");
const Id = new Employee(100);
const Email = new Employee("test@test.com");
const Role = new Employee("Alice", 100, "test@test.com");

Name.getName();
Id.getId();
Email.getEmail();
Role.getRole();


module.exports = Employee;