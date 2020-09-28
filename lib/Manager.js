// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        //set up properties again but use the  'Super' function as a shortcut
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }

};

const e = new Manager("Alice", 100, "test@test.com", 500);


module.exports = Manager;