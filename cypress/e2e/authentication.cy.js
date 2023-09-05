describe('authentication', () => {
    it('login with wrong credentials', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
        cy.get("#email").type("testing@gmail.com")
        cy.get('#password').type('password')
        cy.get('#submit').click()
        cy.get('#error').should('be.visible')
    })

    it('create new user', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
        cy.get('#signup').click()
        cy.get("#firstName").type('Royall')
        cy.get("#lastName").type('Ferriman')
        cy.get('#email').type('rferriman0@google.ca')
        cy.get('#password').should('have.attr','type','password').type("iT8~d?6q0Y0'&")
        cy.get('#submit').click()

    })

    it('sign up with existing credentials', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
        cy.get('#signup').click()
        cy.get("#firstName").type('Royall')
        cy.get("#lastName").type('Ferriman')
        cy.get('#email').type('rferriman0@google.ca')
        cy.get('#password').should('have.attr','type','password').type("iT8~d?6q0Y0'&")
        cy.get('#submit').click()
        cy.get('#error')
            .should('be.visible')
            .and('contain','Email address is already in use')

    })

    it('login without email address', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
        cy.get('#password').type("iT8~d?6q0Y0'&")
        cy.get('#submit').click()
        cy.get('#error').should('contain','Incorrect username or password')
    })

    it('login without password', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
        cy.get('#email').type('rferriman0@google.ca')
        cy.get('#submit').click()
        cy.get('#error').should('contain','Incorrect username or password')
    })

    it('sign in', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
        cy.get('#email').type('rferriman0@google.ca')
        cy.get('#password').type("iT8~d?6q0Y0'&")
        cy.get('#submit').click()
    })

   
})