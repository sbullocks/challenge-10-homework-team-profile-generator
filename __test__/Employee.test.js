const Employee = require('../lib/employee.classes');

describe('Employee', () => {
    describe('constructor', () => {
        it('should return an object with three values when called with new keyword', () => {
            const obj = new Employee();
            
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
        it('shoul set name, id, and email when created', () => {
            const name = 'Stephen';
            const id = '123';
            const email = 'sbullocks@gmail.com';

            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
    });
    describe('getName', () => {
        it('should return employee name', () => {
            const name = 'Stephen';

            const newName = new Employee(name, '123', 'sbullocks@gmail.com').getName();

            expect(name).toEqual(newName);
        });
    });

    describe('getId', () => {
        it('should return an employee id', () => {
            const id ='123';

            const newId = new Employee('Stephen', id, 'sbullocks@gmail.com').getId();

            expect(id).toEqual(newId);
        });
    });

    describe('getEmail', () => {
        it('should return an employee email', () => {
            const email ='sbullocks@gmail.com';

            const newEmail = new Employee('Stephen', '123', email).getEmail();

            expect(email).toEqual(newEmail);
        });
    });

    describe('getRole', () => {
        it('should return an employee role', () => {
            const role ='Employee';

            const newRole = new Employee('Stephen', '123', 'sbullocks@gmail.com').getRole();

            expect(role).toEqual(newRole);
        });
    });
})