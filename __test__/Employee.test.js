// Brings in the employee class from classes file in lib.
const Employee = require("../lib/employee.classes");

// Begins the test.
// Every describe() section begins a new test for that specific method.
describe("Employee", () => {
  describe("constructor", () => {
    it("Should return an object with three values when called with new keyword.", () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });
    it("Should set name, id, and email when created.", () => {
      const name = "Stephen";
      const id = "123";
      const email = "sbullocks@gmail.com";

      const obj = new Employee(name, id, email);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
  });

  describe("getName", () => {
    it("Should return employee name.", () => {
      const name = "Stephen";

      const newName = new Employee(
        name,
        "123",
        "sbullocks@gmail.com"
      ).getName();

      expect(name).toEqual(newName);
    });
  });

  describe("getId", () => {
    it("Should return an employee id number.", () => {
      const id = "123";

      const newId = new Employee("Stephen", id, "sbullocks@gmail.com").getId();

      expect(id).toEqual(newId);
    });
  });

  describe("getEmail", () => {
    it("Should return an employee email address.", () => {
      const email = "sbullocks@gmail.com";

      const newEmail = new Employee("Stephen", "123", email).getEmail();

      expect(email).toEqual(newEmail);
    });
  });

  describe("getRole", () => {
    it("Should return an employee role.", () => {
      const role = "Employee";

      const newRole = new Employee(
        "Stephen",
        "123",
        "sbullocks@gmail.com"
      ).getRole();

      expect(role).toEqual(newRole);
    });
  });
});
