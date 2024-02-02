
describe('ProfilComponent', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    });
  
    it('should display user name and email', () => {

      cy.contains('.text-lg', 'John Doe');
      cy.contains('.text-sm', 'john.doe@example.com');
    });
  });
  