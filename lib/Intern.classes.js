// Must require the Employee class.
const Employee = require("./Employee.classes");

// Must extend the Employee class propeties when creating the new class.
// Super completes the extend Employee class properties.
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // The below functions will return the users data.

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
