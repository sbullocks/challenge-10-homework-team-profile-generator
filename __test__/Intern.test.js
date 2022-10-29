const Intern = require('../lib/intern.classes');

describe('Intern', () => {
    describe('constructor', () => {
        it('Should return an object with three values when called with new keyword.', () => {
            const obj = new Intern();
            
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
        it('Should set name, id, and email when created.', () => {
            const name = 'Stephen';
            const id = '123';
            const email = 'sbullocks@gmail.com';

            const obj = new Intern(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
    });
})