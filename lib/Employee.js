// TODO: Write code to define and export the Employee class

class Employee {
    //here the constructor I am building is taking in 3 parameters of employee name, email, and id.
    constructor(Name, Id, Email, Role) {
        //here we take these parameters and assign them to properties of the class as an object
        this.name = Name;
        this.id = Id;
        this.email = Email; 
        this.role = Role; 
    }

    getName(){
        this.name;
        return this;
    }

    getId(){
        this.id;
        return this;
    }

    getEmail(){
        this.email;
        return this;
    }

    getRole(){
        this.role;
        return this;
    }
};

const employeeUser = new Employee(this.name, this.id, this.Email, this.role);
const Name = new Employee("Alice");
const Id = new Employee(100);
const Email = new Employee("test@test.com");
const Role = new Employee("Alice", 100, "test@test.com");

employeeUser.getName().getId().getEmail().getRole();


module.exports = Employee;