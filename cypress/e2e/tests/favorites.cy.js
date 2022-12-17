import Fav from '../page/favorites.page'

describe('Favourites Tests', () => {
    beforeEach(() => {
        cy.visit('/favorites')
        //go to favourites page before executing each test
    })

    it('displays page header text', () => {
        cy.get(Fav.headerTxt).should('be.visible')
    })
    
})