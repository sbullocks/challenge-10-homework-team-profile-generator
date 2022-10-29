// Must require the Employee class.
const Employee = require("./Employee.classes");

// Must extend the Employee class propeties when creating the new class.
// Super completes the extend Employee class properties.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // The below functions will return the users data.

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
