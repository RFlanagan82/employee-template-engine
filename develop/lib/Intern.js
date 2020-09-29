const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        //set up properties again but use the  'Super' function as a shortcut
        super(name, id, email, school);
        this.school = school;
    };
 
    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
};



const e = new Intern("Alice", 100, "test@test.com", "UCLA");

module.exports = Intern;