  describe('First link contains title First Test with link list', () => {
    it('Go to Google search page', () => {
      cy.visit('https://www.google.com');
    });
  
    it('searches for `automation`', () => {
      cy.get('input[name="q"]').type('automation{enter}');
    });
    
    it('gets result link list', () => {
      var elem = []
      cy.get('div[class="g"]')
      .each((el) => {
      elem.push(el.text) 
      cy.log(el.text())
    })
    });
  });

  
describe('First link contains title Second Test', () => {
  it('Go to Google search page', () => {
    cy.visit('https://www.google.com');
  });

  it('searches for `automation`', () => {
    cy.get('input[name="q"]').type('automation{enter}');
  });
  
  it('gets first search result', () => {
    cy.get('#search a')
      .invoke('attr', 'href')
      .then(href => console.log(href));
  });
});


