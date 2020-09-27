// TODO: Write code to define and export the Employee class

"use strict"

class Employee {
    //here the constructor I am building is taking in 3 parameters of employee name, email, and id.
    constructor(name, id, email) {
        //here we take these parameters and assign them to properties of the class as an object
        this.name = name;
        this.id = id;
        this.email = email;  
    }

    // register(){
    //     console.log(this.name+ ' is now a registered employee');
    // }
};


//let employee = new Employee(this.name, this.id, this.email);

//employee.register();


module.exports = Employee;