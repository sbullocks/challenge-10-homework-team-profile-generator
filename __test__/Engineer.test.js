// Brings in the employee class from classes file in lib.
const Engineer = require('../lib/engineer.classes');

// Begins testing.
describe('Engineer', () => {
    // Test getRole method.
    describe('getRole', () => {
    it('should return employee role', () => {
            const role = 'Engineer
            
            const newRole = new Engineer().getRole();

            expect(role).toEqual(newRole);
    });
    // Test getGithub method.
    describe('getGithub', () => {
        it('should return employee GitHub', () => {
                const github = 'sbullocks';
                
                const newGithub = new Engineer('1', '2', '3', github).getGithub();
    
                expect(github).toEqual(newGithub);
        });
        }); 
    });
})