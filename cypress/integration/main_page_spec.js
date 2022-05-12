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
    cy.intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions', {
      fixture: 'examplePostResponse.json'
    }).as('postRequest');
    cy.get('img').should('have.attr', 'alt', 'inactive AI');
    cy.get('.response-box').should('not.exist');
    cy.get('textarea').type('What color is the sky?');
    cy.get('button').click();
    cy.wait('@postRequest');
    cy.get('img').should('have.attr', 'alt', 'active AI');
    cy.get('.response-box')
      .get('.response-text').contains('The sky is blue.');
    cy.get('button').contains('Reset').click();
    cy.get('textarea').should('have.value', '');
    cy.get('img').should('have.attr', 'alt', 'inactive AI');
  });

  it('should not be able to submit the form if no prompt is provided', () => {
    cy.get('textarea').should('have.value', '');
    cy.get('button').click();
    cy.get('button').contains('Submit');
    cy.get('img').should('have.attr', 'alt', 'inactive AI');
  });
})
