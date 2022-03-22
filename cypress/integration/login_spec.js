
describe( 'Log-in', () => {

    beforeEach( () => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it( 'Login test', () => {

        cy.login( 'test@email.com', 'password123')

        cy.fixture( 'login').then( (login) => {

            cy.get( login.alertIncorrectLogin).should( 'contain', 'Authentication failed.')
        } )

    })
})