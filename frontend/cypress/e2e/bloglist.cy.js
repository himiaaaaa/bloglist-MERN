describe('bloglist', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('login', () => {
    it('frontpage can open', () => {
      cy.contains('BLOG')
      cy.contains('A Walk in the Woods')
    })

    it('login form can be opened', () => {
      cy.contains('LOGIN').click()
    })


    it('user can login', () => {
      cy.contains('LOGIN').click()
      cy.get('input:first').type('testusersix')
      cy.get('input:last').type('numbersix')
      cy.get('#login-button').click()

      cy.contains('LOGOUT')
    })

    it('fail with wrong credentials', () => {
      cy.contains('LOGIN').click()
      cy.get('input:first').type('testusersix')
      cy.get('input:last').type('wrong')
      cy.get('#login-button').click()
      cy.contains('Wrong username or password')
    })
  })


  describe('register', () => {
    it('register form can be opened', () => {
      cy.contains('REGISTER').click()
    })

    /*
    it('user can register', () => {
      cy.contains('REGISTER').click()
      cy.get('#username').type('testuser12')
      cy.get('#email').type('testuser12@gmail.com')
      cy.get('#password').type('numberetwe')
      cy.get('#register-btn').click()

      cy.contains('LOGOUT')

    }) */

    it('fail with not valid email', () => {
      cy.contains('REGISTER').click()
      cy.get('#username').type('testuserten')
      cy.get('#email').type('testuserten')
      cy.get('#password').type('numberten')
      cy.get('#register-btn').click()

      cy.contains('This is not a valid email.')
    })

    it('fail with not unique name or email', () => {
      cy.contains('REGISTER').click()
      cy.get('#username').type('testuser10')
      cy.get('#email').type('testuser10@gmail.com')
      cy.get('#password').type('numberten')
      cy.get('#register-btn').click()

      cy.contains('Username or email already exists')
    })
  })
})