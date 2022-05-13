describe('Fun with AI Main Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should display app Header, PromptForm component and the ResponseLog component', () => {
    cy.get('h1').contains("Fun with AI");
    cy.get('form')
      .get('label').contains('Enter prompt');
    cy.get('textarea')
      .get('img').should('be.visible')
      .get('button');
    cy.get('h2').contains('Responses')
      .get('.empty-log-msg').contains('There are no responses to log yet.');
  });

  it('should be able to add/submit a prompt, which should update the responses log, and then be able to reset the form afterwards', () => {
    cy.intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions', {
      fixture: 'examplePostResponse.json'
    }).as('postRequest');
    cy.get('img').should('have.attr', 'alt', 'inactive AI');
    cy.get('.response-box').should('not.exist');
    cy.get('.empty-log-msg').contains('There are no responses to log yet.');
    cy.get('textarea').type('What color is the sky?');
    cy.get('button').click();
    cy.wait('@postRequest');
    cy.get('img').should('have.attr', 'alt', 'active AI');
    cy.get('.response-box')
      .get('.response-text').contains('The sky is blue.');
    cy.get('.response-log').children().should('have.length', 2);
    cy.get('.response-card').should('contain', "What color is the sky")
      .and('contain', "The sky is blue.");
    cy.get('button').contains('Reset').click();
    cy.get('textarea').should('have.value', '');
    cy.get('img').should('have.attr', 'alt', 'inactive AI');
  });

  it('should display the responses in order of recentness', () => {
    cy.intercept(
    {
      method: 'POST',
      url: 'https://api.openai.com/v1/engines/text-curie-001/completions',
    },
    { fixture: 'anotherPostResponse.json' }).as('anotherRequest');
    cy.intercept(
    {
      method: 'POST',
      url: 'https://api.openai.com/v1/engines/text-curie-001/completions',
      times: 1
    },
    { fixture: 'examplePostResponse.json' }).as('postRequest');
    cy.get('textarea').type('What color is the sky?');
    cy.get('button').click();
    cy.wait('@postRequest');
    cy.get('.response-log').children().should('have.length', 2);
    cy.get('.response-card').first().should('contain', "What color is the sky")
      .and('contain', "The sky is blue.");
    cy.get('button').contains('Reset').click();
    cy.get('textarea').type('What colors do skittles come in?');
    cy.get('button').click();
    cy.wait('@anotherRequest');
    cy.get('.response-log').children().should('have.length', 3);
    cy.get('.response-card').first().should('contain', "What colors do skittles come in?")
      .and('contain', "Skittles come in a variety of colors, including red, green, yellow, and blue.");
  });

  it('should not be able to edit the textarea until the form is reset', () => {
    cy.intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions', {
      fixture: 'examplePostResponse.json'
    }).as('postRequest');
    cy.get('textarea').type('What color is the sky?');
    cy.get('button').click();
    cy.wait('@postRequest');
    cy.get('textarea').should('be.disabled');
    cy.get('button').click();
    cy.get('textarea').should('not.be.disabled');
  });

  it('should not be able to submit the form if no prompt is provided', () => {
    cy.get('textarea').should('have.value', '');
    cy.get('button').click();
    cy.get('button').contains('Submit');
    cy.get('img').should('have.attr', 'alt', 'inactive AI');
  });
})
