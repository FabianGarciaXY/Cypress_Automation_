
describe( 'Searching for elements ', () => {

    beforeEach( () => {
        cy.visit('http://automationpractice.com/index.php');
    })


    it('Search for elements with multiple results', () => {

        // Buscamos el achivo dentro de Fixtures
        cy.fixture('home')
            .then( ( home ) => {
                cy.get(home.searchBox)
                    .type('dress')
                cy.get(home.searchButton)
                    .click();
        });

        cy.fixture( "searchResult" )
            .then ( ( searchResult ) => {
                cy.get( searchResult.title )
                    .should( 'contain', 'dress' )
         });

    })

    it('Search for elements with NO results', () => {

        cy.fixture( 'home' )
            .then( ( home ) => {
                cy.get( home.searchBox )
                    .type( 'qwerty' );
                cy.get( home.searchButton )
                    .click()
        })

        cy.fixture( "searchResult" )
        .then ( ( searchResult ) => {
            cy.get( searchResult.alert )
                .should( 'contain', 'No results were found for your search' )
        });

    })

})
