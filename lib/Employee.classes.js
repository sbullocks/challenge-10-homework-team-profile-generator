// This is the first class that will house all the properties to be carried over to the other worker roles.
// When applying the properties of the Employee class; must use the require() method with the Employee.classes defined.
// This allows extends and super to be used to pull in the employee class properties.
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // The below functions will return the users data.

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
