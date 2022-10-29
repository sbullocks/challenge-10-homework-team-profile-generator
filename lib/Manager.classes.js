// Must require the Employee class.
const Employee = require("./Employee.classes");

// Must extend the Employee class propeties when creating the new class.
// Super completes the extend Employee class properties.
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // The below functions will return the users data.

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
