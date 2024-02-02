describe('Payment Page', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
  })

  it('should render the default element in the page', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="header"]').should("exist").should("have.text", "Goods To Be Paid")
  })

  it('should fill the form and enable the submit button', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="cardNumber"]').type('1234567890123456');
    cy.get('input[name="expirationDate"]').type('1225');
    cy.get('input[name="cvv"]').type('123');
    cy.get('input[name="address"]').type('123 Main St');
    cy.get('input[name="zip"]').type('12345');

    cy.get('button[type="submit"]').should('not.be.disabled');
  });

  it('should disable the submit button when a field is empty', () => {

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="cardNumber"]').type('1234567890123456');
    cy.get('input[name="expirationDate"]').type('1225');
    cy.get('input[name="cvv"]').type('123');
    cy.get('input[name="address"]').type('123 Main St');

    cy.get('button[type="submit"]').should('be.disabled');
  });
})