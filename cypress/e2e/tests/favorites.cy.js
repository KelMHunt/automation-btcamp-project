import Fav from '../page/favorites.page'

describe('Favorites Tests', () => {
    beforeEach(() => {
        cy.visit('/favorites')
        //go to favourites page before executing each test
    })

    it('displays page header text', () => {
        cy.get(Fav.headerTxt).should('be.visible')
    })
    
    it('displays appropriate text when no favorites have been added', () => {
        cy.get(Fav.noFavoritesTxt).should('be.visible')
    })

    it('does not display products when no favorites have been added', () => {
        cy.get(Fav.productTile).should('not.exist')
    })

})