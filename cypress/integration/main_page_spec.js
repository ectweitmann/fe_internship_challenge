describe('Fun with AI Main Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should display app Header and the PromptForm component and all of its children', () => {
    cy.get('h1').contains("Fun with AI");
    cy.get('form')
      .get('label').contains('Enter prompt');
    cy.get('textarea')
      .get('img').should('be.visible')
      .get('button');
  });

  it('should be able to add/submit a prompt and reset the form afterwards', () => {
    cy.get('img').should('have.attr', 'alt', 'inactive AI');
    cy.get('textarea').type('Awaken AI.');
    cy.get('button').click();
    cy.get('img').should('have.attr', 'alt', 'active AI');
    cy.get('button').contains('Reset').click();
    cy.get('textarea').should('have.value', '');
    cy.get('img').should('have.attr', 'alt', 'inactive AI');
  });
  
})
