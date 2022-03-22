
describe( 'Searching for elements ', () => {

    beforeEach( () => {
        cy.visit('http://automationpractice.com/index.php');
    })


    it('Search for elements with multiple results', () => {
        // Buscamos el achivo dentro de Fixtures
        cy.search( 'dress' );
        cy.validateResult( 'dress' )

    })

    it('Search for elements with NO results', () => {

        cy.search( 'querty' );  

        cy.fixture( "searchResult" )
            .then ( ( searchResult ) => {
            cy.get( searchResult.alert )
                .should( 'contain', 'No results were found for your search' )
        });

    })

})
