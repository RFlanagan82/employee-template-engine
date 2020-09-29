class Employee {
    //here the constructor I am building is taking in 3 parameters of employee name, email, and id.
    constructor(name, id, email) {
        //here we take these parameters and assign them to properties of the class as an object
        this.name = name;
        this.id = id;
        this.email = email; 
    }

    getEmail(){
        return this.email;
    }

    getName(){
       return this.name;
    }

    getId(){
        return this.id;
    }

    getRole(){
        return "Employee";
     }

 
};

const e = new Employee("Alice", 100, "test@test.com");

module.exports = Employee;